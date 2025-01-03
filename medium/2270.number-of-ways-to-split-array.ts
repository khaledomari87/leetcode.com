// https://leetcode.com/problems/number-of-ways-to-split-array/solutions/6223032/simple-readable-and-efficient/

function waysToSplitArray(nums: number[]) {
    let res = 0, prefix = 0, suffix = nums.reduce((a, b) => a + b), index = -1;
    while (++index < nums.length - 1) {
        res += +((prefix += nums[index]) >= (suffix -= nums[index]));
    }
    return res;
}
