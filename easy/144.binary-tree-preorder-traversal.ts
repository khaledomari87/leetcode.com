// https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/6257344/one-liner/

import type TreeNode from '../assets/TreeNode.ts';

const preorderTraversal = (root: TreeNode | null): number[] =>
    root && [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] || [];
