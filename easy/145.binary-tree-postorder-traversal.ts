// https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/6257348/one-liner/

import type TreeNode from '../assets/TreeNode.ts';

const postorderTraversal = (root: TreeNode | null): number[] =>
    root && [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] || [];
