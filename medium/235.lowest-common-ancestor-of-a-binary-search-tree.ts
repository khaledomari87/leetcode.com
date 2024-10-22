// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

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

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null {
    while (root) {
        if ([p.val, q.val].every((v) => v < root.val)) root = root.left!;
        else if ([p.val, q.val].every((v) => v > root.val)) root = root.right!;
        else break;
    }
    return root;
}
