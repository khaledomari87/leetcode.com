// https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/7097483/clean-simple/

function zeroFilledSubarray(nums: number[]) {
    let res = 0, cnt = 0;
    for (const num of nums) num ? cnt = 0 : res += ++cnt;
    return res;
}
