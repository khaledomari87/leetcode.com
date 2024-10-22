// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

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

function kthSmallest(root: TreeNode, k: number): number {
    let output = Number.POSITIVE_INFINITY;
    const dfs = (node: TreeNode | null) => {
        if (!node) return;
        dfs(node.left);
        --k === 0 && (output = node.val);
        k > 0 && dfs(node.right);
    };
    dfs(root);
    return output;
}
