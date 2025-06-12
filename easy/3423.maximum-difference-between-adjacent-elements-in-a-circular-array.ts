// https://leetcode.com/problems/maximum-difference-between-adjacent-elements-in-a-circular-array/solutions/6835243/clean-one-line/

function maxAdjacentDistance(nums: number[]) {
    const n = nums.length, { max, abs } = Math;
    let res = abs(nums[0] - nums.at(-1)!);
    for (let i = 1; i < n; i++) {
        res = max(res, abs(nums[i] - nums[i - 1]));
    }
    return res;
}

const maxAdjacentDistanceOneLine = (nums: number[]) =>
    nums.reduce(
        (res, n, i) => Math.max(res, Math.abs(n - nums.at(i - 1)!)),
        0,
    );
