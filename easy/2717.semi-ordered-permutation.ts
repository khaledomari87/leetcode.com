// https://leetcode.com/problems/semi-ordered-permutation/solutions/7244006/simplest/

function semiOrderedPermutation(nums: number[]) {
    const a = nums.indexOf(1), b = nums.indexOf(nums.length);
    return a + nums.length - b - 1 + -(a > b);
}
