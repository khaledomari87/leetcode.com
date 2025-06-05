// https://leetcode.com/problems/n-th-tribonacci-number/solutions/6812455/dynamic-programming/

function tribonacci(n: number) {
    const dp = [0, 1, 1];
    if (n < 3) return dp[n];
    while (n-- > 2) {
        dp.push(dp.reduce((a, b) => a + b));
        dp.shift();
    }
    return dp.at(-1)!;
}
