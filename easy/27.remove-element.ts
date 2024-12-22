// https://leetcode.com/problems/remove-element/solutions/6175349/one-line-optimum-solution/

const removeElement = (nums: number[], val: number) =>
    nums.reduce((L, RVal, R) => (nums[R] !== val && (nums[L++] = RVal) && L || L), 0);
