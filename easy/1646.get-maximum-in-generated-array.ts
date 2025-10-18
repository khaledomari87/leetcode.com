// https://leetcode.com/problems/get-maximum-in-generated-array/solutions/7283625/simulation/

function getMaximumGenerated(n: number) {
    const dp = new Array<number>(n + 1);
    dp[0] = 0, dp[1] = Math.min(1, n);
    for (let i = 1; 2 * i <= n; i++) {
        if (2 * i <= n) dp[2 * i] = dp[i];
        if (2 * i + 1 <= n) dp[2 * i + 1] = dp[i] + dp[i + 1];
    }
    return Math.max(...dp);
}
