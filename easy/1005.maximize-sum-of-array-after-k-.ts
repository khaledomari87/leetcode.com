// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/6781855/sorting/

function largestSumAfterKNegations(nums: number[], k: number) {
    const n = nums.sort((a, b) => a - b).length, min = Math.min;
    let i = 0;
    while (i < n && i < k && nums[i] < 0) nums[i++] *= -1;
    return nums.reduce((a, b) => a + b) -
        ((k - i) & 1) * 2 * nums.reduce((a, b) => min(a, b));
}
