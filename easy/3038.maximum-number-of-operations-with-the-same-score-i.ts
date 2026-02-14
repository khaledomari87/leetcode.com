// https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/7578632/simple-simulation/

function maxOperations(nums: number[]) {
    const n = nums.length - 1, score = nums[0] + nums[1];
    let res = 1, i = 2;
    while (i < n && nums[i++] + nums[i++] === score) res++;
    return res;
}
