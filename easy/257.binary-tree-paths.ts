// https://leetcode.com/problems/binary-tree-paths/solutions/6273672/recursive-backtracking/

import type TreeNode from '../assets/TreeNode.ts';

function binaryTreePaths(root: TreeNode | null): string[] {
    const res: string[] = [];
    const ancestors: number[] = [];
    const backtrack = (node: TreeNode | null) => {
        if (node === null) return;
        ancestors.push(node.val);
        if (!node.left && !node.right) res.push(ancestors.join('->'));
        backtrack(node.left);
        backtrack(node.right);
        ancestors.pop();
    };
    backtrack(root);
    return res;
}
