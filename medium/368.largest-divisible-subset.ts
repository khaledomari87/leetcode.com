// https://leetcode.com/problems/largest-divisible-subset/solutions/6621348/simple-dynamic-programming/

function largestDivisibleSubset(nums: number[]) {
    const dp = nums.sort((a, b) => a - b).map((n) => [n]);
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] % nums[i] === 0 && dp[j].length >= dp[i].length) {
                dp[i] = [nums[i]].concat(dp[j]);
            }
        }
    }
    return dp.reduce((a, b) => (a.length > b.length ? a : b));
}
