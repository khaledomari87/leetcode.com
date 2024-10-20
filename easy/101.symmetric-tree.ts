// https://leetcode.com/problems/symmetric-tree/

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

const isMirrorTree = (p: TreeNode | null, q: TreeNode | null): boolean =>
    Boolean(
        !q && !p ||
            q && p && q.val === p.val && isMirrorTree(p.left, q.right) && isMirrorTree(p.right, q.left),
    );

const isSymmetric = (root: TreeNode | null): boolean => isMirrorTree(root?.left || null, root?.right || null);
