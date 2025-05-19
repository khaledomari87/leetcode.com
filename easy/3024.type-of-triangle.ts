// https://leetcode.com/problems/type-of-triangle/solutions/6758444/one-line/

const triangleType = (nums: number[]) =>
    nums.sort((a, b) => a - b)[2] >= nums[0] + nums[1]
        ? 'none'
        : ['equilateral', 'isosceles', 'scalene'][new Set(nums).size - 1];
