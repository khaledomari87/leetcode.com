// https://leetcode.com/problems/maximum-depth-of-binary-tree/

import type TreeNode from '../assets/TreeNode.ts';

function maxDepth(root: TreeNode | null): number {
    return root && 1 + Math.max(maxDepth(root.right), maxDepth(root.left)) || 0;
}
