// https://leetcode.com/problems/sum-of-variable-length-subarrays/solutions/7645582/prefix-sum-linear-solution/

function subarraySum(nums: number[]) {
    const prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(prefix[i - 1] + nums[i]);
    }
    let res = 0;
    for (let j = 0; j < nums.length; j++) {
        const i = Math.max(0, j - nums[j]);
        res += prefix[j] - (i > 0 ? prefix[i - 1] : 0);
    }
    return res;
}
