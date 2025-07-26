// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/5953351/simple-and-efficient/

import type TreeNode from '../assets/TreeNode.ts';

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null {
    while (root) {
        if ([p.val, q.val].every((v) => v < root.val)) root = root.left!;
        else if ([p.val, q.val].every((v) => v > root.val)) root = root.right!;
        else break;
    }
    return root;
}
