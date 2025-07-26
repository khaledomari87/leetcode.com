// https://leetcode.com/problems/symmetric-tree/solutions/5941236/shortest-and-most-efficient/

import type TreeNode from '../assets/TreeNode.ts';

const isMirrorTree = (p: TreeNode | null, q: TreeNode | null): boolean =>
    Boolean(
        !q && !p ||
            q && p && q.val === p.val && isMirrorTree(p.left, q.right) && isMirrorTree(p.right, q.left),
    );

const isSymmetric = (root: TreeNode | null): boolean => isMirrorTree(root?.left || null, root?.right || null);
