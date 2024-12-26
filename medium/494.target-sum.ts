// https://leetcode.com/problems/target-sum/solutions/6187848/dynamic-programming/

function findTargetSumWays(nums: number[], target: number): number {
    const total = nums.reduce((a, b) => a + b, 0);
    if (Math.abs(target) > total || (total + target) % 2) return 0;

    const len = (total + target) / 2 + 1;
    const dp = Array(len).fill(0);
    dp[0] = 1;

    nums.forEach((num) => {
        for (let i = len - 1; i >= num; i--) dp[i] += dp[i - num];
    });
    return dp[len - 1];
}
