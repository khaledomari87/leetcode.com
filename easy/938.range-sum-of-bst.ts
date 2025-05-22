// https://leetcode.com/problems/range-sum-of-bst/solutions/6771003/dfs/

import TreeNode from '../assets/TreeNode.ts';

function rangeSumBST(root: TreeNode | null, low: number, high: number) {
    let sum = 0;
    if (root) {
        if (low <= root.val && root.val <= high) sum += root.val;
        if (low <= root.val) sum += rangeSumBST(root.left, low, high);
        if (root.val <= high) sum += rangeSumBST(root.right, low, high);
    }
    return sum;
}
