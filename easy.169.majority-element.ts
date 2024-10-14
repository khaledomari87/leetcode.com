// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    let output: number = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (output === nums[i]) {
            count++;
        } else {
            if (count === 1) {
                output = nums[i];
            } else {
                count--;
            }
        }
    }
    return output;
};
