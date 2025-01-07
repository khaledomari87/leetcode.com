// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/6244166/short-and-simple-recursion/

import TreeNode from '../assets/TreeNode.ts';

function sortedArrayToBST(nums: number[], L = 0, R = nums.length - 1): TreeNode | null {
    if (L > R) return null;
    const mid = Math.floor((L + R) / 2);
    return new TreeNode(
        nums[mid],
        sortedArrayToBST(nums, L, mid - 1),
        sortedArrayToBST(nums, mid + 1, R),
    );
}
