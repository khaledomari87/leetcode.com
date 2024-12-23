import type TreeNode from '../assets/TreeNode.ts';

const height = (root: TreeNode | null): number =>
    root && 1 + Math.max(height(root.right), height(root.left)) || 0;

const isBalanced = (root: TreeNode | null): boolean =>
    !root ||
    Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
