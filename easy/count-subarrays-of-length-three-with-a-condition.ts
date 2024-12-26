// https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/solutions/6188244/optimum-solution/

const countSubarrays = (nums: number[]): number => {
    let output = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        nums[i - 1] + nums[i + 1] === nums[i] / 2 && output++;
    }
    return output;
};
