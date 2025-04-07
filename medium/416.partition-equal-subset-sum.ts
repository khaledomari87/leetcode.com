// https://leetcode.com/problems/partition-equal-subset-sum/solutions/6624178/dynamic-programming/

function canPartition(nums: number[]) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum & 1) return false;
    const t = sum / 2, dp = [true, ...new Array<boolean>(t)];
    for (const num of nums) {
        if (dp[t - num]) return true;
        for (let j = t - 1; j >= num; j--) {
            if (!dp[j]) dp[j] = dp[j - num];
        }
    }
    return false;
}
