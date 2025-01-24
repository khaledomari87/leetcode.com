// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/6325582/simple-and-efficient-one-line-bonus/

import type _Node from '../assets/_Node.ts';

function maxDepth(root: _Node | null): number {
    if (!root) return 0;
    let max = 0;
    for (const child of root.children) {
        max = Math.max(max, maxDepth(child));
    }
    return 1 + max;
}

const maxDepthOneLine = (root: _Node | null): number =>
    root && 1 + Math.max(0, ...root.children.map((c) => maxDepthOneLine(c))) || 0;
