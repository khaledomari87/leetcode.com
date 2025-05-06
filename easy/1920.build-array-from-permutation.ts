// https://leetcode.com/problems/build-array-from-permutation/solutions/6719122/in-place/

const buildArray = (nums: number[]) => nums.map((num) => nums[num]);

function buildArrayInPlace(nums: number[]) {
    nums.forEach((num, i) => nums[i] += 1000 * (nums[num] % 1000));
    nums.forEach((num, i) => nums[i] = Math.floor(num / 1000));
    return nums;
}
