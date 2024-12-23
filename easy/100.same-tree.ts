import type TreeNode from '../assets/TreeNode.ts';

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean =>
    Boolean(
        !q && !p || q && p && q.val === p.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right),
    );
