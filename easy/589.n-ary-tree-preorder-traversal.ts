// https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/6336655/dfs/

import type _Node from '../assets/_Node.ts';

function preorder(root: _Node | null): number[] {
    const res: number[] = [];
    const dfs = (node: _Node | null) => {
        if (!node) return;
        res.push(node.val);
        node.children.forEach((child) => dfs(child));
    };
    dfs(root);
    return res;
}
