// https://leetcode.com/problems/path-sum/

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

const hasPathSum = (root: TreeNode | null, target: number): boolean =>
    Boolean(
        (!root?.left && !root?.right) && root?.val === target ||
            root && (hasPathSum(root.right, target - root.val) || hasPathSum(root.left, target - root.val)),
    );
