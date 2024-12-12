// https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/6140409/simplest-solution-dfs/

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
