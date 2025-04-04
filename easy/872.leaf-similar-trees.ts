// https://leetcode.com/problems/leaf-similar-trees/solutions/6616478/dfs-and-stack/

import type TreeNode from '../assets/TreeNode.ts';

function leafSimilar(A: TreeNode, B: TreeNode) {
    const dfs = (node: TreeNode | null, invert: boolean) => {
        if (!node) return true;
        if (!node.left && !node.right) {
            if (invert) return leafs.pop() === node.val;
            leafs.push(node.val);
            return true;
        }
        if (!dfs(node[invert ? R : L], invert)) return false;
        if (!dfs(node[invert ? L : R], invert)) return false;
        return true;
    };
    const leafs: number[] = [], L = 'left', R = 'right';
    return [A, B].every((r) => dfs(r, r === B)) && !leafs.length;
}
