// https://leetcode.com/problems/evaluate-boolean-binary-tree/solutions/8340620/recursive-dfs/

import TreeNode from '../assets/TreeNode.ts';

function evaluateTree(N: TreeNode | null): boolean {
    if (!N || N.val < 2) return Boolean(N?.val);
    if (N.val == 2) return evaluateTree(N.left) || evaluateTree(N.right);
    return evaluateTree(N.left) && evaluateTree(N.right);
}
