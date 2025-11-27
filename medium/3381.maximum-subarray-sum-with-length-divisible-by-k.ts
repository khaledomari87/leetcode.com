// https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/7376929/prefix-sum/

const { min, max } = Math;
function maxSubarraySum(nums: number[], k: number) {
    const prefix = Array<number>(k).fill(Infinity);
    prefix[0] = 0;
    let res = -Infinity, total = 0;
    nums.forEach((num, i) => {
        total += num;
        res = max(res, total - prefix[(i + 1) % k]);
        prefix[(i + 1) % k] = min(prefix[(i + 1) % k], total);
    });
    return res;
}
