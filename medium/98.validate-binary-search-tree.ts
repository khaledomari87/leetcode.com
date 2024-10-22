// https://leetcode.com/problems/validate-binary-search-tree/

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

const isValidBST = (
    root: TreeNode | null,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
): boolean =>
    !root ||
    root.val > min && root.val < max && isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max);
