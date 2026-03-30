// https://leetcode.com/problems/minimum-absolute-difference-between-two-values/solutions/7724594/linear-solution-two-pointers/

function minAbsoluteDifference(nums: number[]) {
    let res = Infinity, i = nums.findIndex((v) => [1, 2].includes(v));
    if (i === -1) return i;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === nums[i]) {
            i = j;
        } else if (nums[j] && Math.abs(nums[j] - nums[i]) == 1) {
            res = Math.min(res, Math.abs(j - i));
            i = j;
        }
    }
    return isFinite(res) ? res : -1;
}
