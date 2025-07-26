// https://leetcode.com/problems/subtree-of-another-tree/solutions/5947160/efficient-and-two-lines/

import type TreeNode from '../assets/TreeNode.ts';

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
