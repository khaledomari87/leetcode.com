// https://leetcode.com/problems/concatenate-array-with-reverse/solutions/8277339/one-line/

const concatWithReverse = (nums: number[]) => nums.concat([...nums].reverse());
