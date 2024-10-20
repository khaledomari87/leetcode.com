class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const height = (root: TreeNode | null): number =>
    root && 1 + Math.max(height(root.right), height(root.left)) || 0;

const isBalanced = (root: TreeNode | null): boolean =>
    !root ||
    Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
