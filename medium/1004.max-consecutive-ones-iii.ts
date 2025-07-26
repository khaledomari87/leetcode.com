// https://leetcode.com/problems/max-consecutive-ones-iii/solutions/5929605/typescript/

function longestOnes(nums: number[], allowance: number): number {
    let output = 0;
    for (let R = 0, L = 0, ZerosCount = 0; R < nums.length; R++) {
        !nums[R] && ZerosCount++;
        while (ZerosCount > allowance) {
            !nums[L] && ZerosCount--;
            L++;
        }
        output = Math.max(output, R - L + 1);
    }
    return output;
}
