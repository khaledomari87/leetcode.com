// https://leetcode.com/problems/diameter-of-binary-tree/

import type TreeNode from '../assets/TreeNode.ts';

function diameterOfBinaryTree(root: TreeNode | null): number {
    let output = 0;
    const height = (node: TreeNode | null): number => {
        if (!node) return 0;
        const left = height(node.left);
        const right = height(node.right);
        output = Math.max(output, left + right); // diameter = left + right
        return 1 + Math.max(left, right);
    };
    height(root);
    return output;
}
