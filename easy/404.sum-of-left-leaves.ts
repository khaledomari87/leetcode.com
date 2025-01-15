// https://leetcode.com/problems/sum-of-left-leaves/solutions/6285497/dfs/

import type TreeNode from '../assets/TreeNode.ts';

function sumOfLeftLeaves(root: TreeNode | null, source?: 'left' | 'right'): number {
    if (!root) return 0;
    if (!root.left && !root.right) return source === 'left' ? root.val : 0;
    return sumOfLeftLeaves(root.left, 'left') + sumOfLeftLeaves(root.right, 'right');
}
