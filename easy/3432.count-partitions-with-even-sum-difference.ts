// https://leetcode.com/problems/count-partitions-with-even-sum-difference/solutions/7384058/prefix-sum/

function countPartitions(nums: number[]) {
    let res = 0, l = 0, r = nums.reduce((a, b) => a + b);
    for (let i = 0, n = nums.length - 1; i < n; i++) {
        l += nums[i], r -= nums[i];
        res += +(l % 2 === r % 2);
        // res += 1 - l % 2 ^ r % 2;
    }
    return res;
}
