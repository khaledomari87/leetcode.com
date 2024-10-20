// https://leetcode.com/problems/diameter-of-binary-tree/

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
