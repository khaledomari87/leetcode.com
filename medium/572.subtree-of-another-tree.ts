// https://leetcode.com/problems/subtree-of-another-tree/

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

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean =>
    Boolean(
        !q && !p || q && p && q.val === p.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right),
    );

const isSubtree = (root: TreeNode, subRoot: TreeNode): boolean =>
    Boolean(
        isSameTree(root, subRoot) ||
            root.right && isSubtree(root.right, subRoot) ||
            root.left && isSubtree(root.left, subRoot),
    );
