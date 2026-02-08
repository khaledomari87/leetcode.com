import type TreeNode from '../assets/TreeNode.ts';

const h = (node: TreeNode | null): number =>
    node ? 1 + Math.max(h(node.left), h(node.right)) : 0;

const isBalanced = (root: TreeNode | null): boolean =>
    !root ? true : Math.abs(h(root.left) - h(root.right)) < 2 &&
        isBalanced(root.left) && isBalanced(root.right);
