// https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/6933822/one-line/

const createTargetArray = (nums: number[], index: number[]) =>
    nums.reduce((a, n, i) => (a.splice(index[i], 0, n), a), [] as number[]);
