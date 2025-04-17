// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/6659269/o-n-2/

const countPairs = (nums: number[], k: number) =>
    nums.reduce((res, numi, i) => {
        for (let j = i + 1; j < nums.length; j++) {
            res += +(numi === nums[j] && !(j * i % k));
        }
        return res;
    }, 0);
