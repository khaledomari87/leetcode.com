// https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/6140409/simplest-solution-dfs/

import type TreeNode from '../assets/TreeNode.ts';

function inorderTraversal(root: TreeNode | null): number[] {
    const output: number[] = [];
    const traversal = (node: typeof root) => {
        if (node) {
            traversal(node.left);
            output.push(node.val);
            traversal(node.right);
        }
    };
    traversal(root);
    return output;
}
