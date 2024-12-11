// https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/6135909/sliding-window-after-sorting-n-log-n/

function maximumBeauty(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let output = 0;
    for (let l = 0, r = 0; r < nums.length; r++) {
        while (nums[r] - nums[l] > 2 * k) l++;
        output = Math.max(output, r - l + 1);
    }
    return output;
}
