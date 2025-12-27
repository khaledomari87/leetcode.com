// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/7443379/gaussian-summation-formula/

function maximizeSum(nums: number[], k: number) {
    const x = nums.reduce((a, b) => Math.max(a, b), 0);
    return x * k + (k * k - k) / 2;
}
