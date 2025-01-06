// https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/6240468/dfs/

import type TreeNode from '../assets/TreeNode.ts';

function minDepth(root: TreeNode | null): number {
    if (!root || !root.left && !root.right) {
        return root ? 1 : 0;
    }
    if (!root.left || !root.right) {
        return 1 + minDepth(root.left || root.right);
    }
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
