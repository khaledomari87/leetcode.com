// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/7266716/simplest/

function countElements(nums: number[]) {
    const { min, max } = Math;
    const mn = nums.reduce((a, b) => min(a, b));
    const mx = nums.reduce((a, b) => max(a, b));
    return nums.reduce((r, n) => r + +(n > mn && n < mx), 0);
}
