// https://leetcode.com/problems/minimum-absolute-difference-in-bst/

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

function getMinimumDifference(root: TreeNode) {
    let output = Number.POSITIVE_INFINITY;
    let prev = Number.NEGATIVE_INFINITY;
    const dfs = (node: typeof root | null) => {
        if (node) {
            dfs(node.left);
            output = Math.min(output, node.val - prev);
            prev = node.val;
            dfs(node.right);
        }
    };
    dfs(root);
    return output;
}
