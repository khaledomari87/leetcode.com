// https://leetcode.com/problems/sum-of-good-numbers/solutions/7417820/simple-simulation/

const sumOfGoodNumbers = (nums: number[], k: number) =>
    nums.reduce((res, cur, i) => {
        if (
            (i + k >= nums.length || nums[i + k] < cur) &&
            (i - k < 0 || nums[i - k] < cur)
        ) return res + cur;
        return res;
    }, 0);
