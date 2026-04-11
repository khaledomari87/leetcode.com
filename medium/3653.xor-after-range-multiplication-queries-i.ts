// https://leetcode.com/problems/xor-after-range-multiplication-queries-i/solutions/7820309/brute-force/

function xorAfterQueries(nums: number[], queries: number[][], mod = 1e9 + 7) {
    for (let [l, r, k, v] of queries) {
        while (l <= r) nums[l] = (nums[l] * v) % mod, l += k;
    }
    return nums.reduce((a, b) => a ^ b);
}
