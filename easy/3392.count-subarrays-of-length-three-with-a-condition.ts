// https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6188244/optimum-solution/

const countSubarrays = (nums: number[]) => {
    let res = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        res += +(nums[i - 1] + nums[i + 1] === nums[i] / 2);
    }
    return res;
};

const countSubarrays2 = (nums: number[]) =>
    nums.slice(1, -1).reduce((res, num, i) => res + +(nums[i] + nums[i + 2] === num / 2), 0);
