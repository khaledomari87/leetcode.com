// https://leetcode.com/problems/path-sum/

import type TreeNode from '../assets/TreeNode.ts';

const hasPathSum = (root: TreeNode | null, target: number): boolean =>
    Boolean(
        (!root?.left && !root?.right) && root?.val === target ||
            root && (hasPathSum(root.right, target - root.val) || hasPathSum(root.left, target - root.val)),
    );
