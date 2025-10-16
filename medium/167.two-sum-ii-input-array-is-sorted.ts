// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/7279677/two-pointers/

function twoSum(nums: number[], target: number) {
    for (let l = 0, r = nums.length - 1; l < r;) {
        const sum = nums[l] + nums[r];
        if (sum === target) return [l + 1, r + 1];
        sum > target ? r-- : l++;
    }
    throw new Error('Invalid Input!');
}
