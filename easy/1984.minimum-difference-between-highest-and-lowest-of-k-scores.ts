// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/7481140/sort-two-pointers-greedy/

function minimumDifference(nums: number[], k: number) {
    const n = nums.sort((a, b) => a - b).length, min = Math.min;
    let res = Infinity;
    for (let l = 0, r = l + k - 1; r < n; l++, r++) {
        res = min(res, nums[r] - nums[l]);
    }
    return res;
}
