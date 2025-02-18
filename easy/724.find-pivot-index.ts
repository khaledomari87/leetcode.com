// https://leetcode.com/problems/find-pivot-index/solutions/6439011/optimal-solution/

function pivotIndex(nums: number[]): number {
    let right = nums.reduce((prev, curr) => curr + prev);
    for (let i = 0, left = 0; i < nums.length; left += nums[i++]) {
        if (left === (right -= nums[i])) return i;
    }
    return -1;
}
