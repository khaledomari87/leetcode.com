// https://leetcode.com/problems/transform-array-by-parity/solutions/6485068/two-lines/

function transformArray(nums: number[]): (0 | 1)[] {
    const evens = nums.reduce((res, num) => res + +!(num % 2), 0);
    return Array.from({ length: nums.length }, (_, i) => (i < evens ? 0 : 1));
}
