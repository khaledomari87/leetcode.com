// https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/7395710/one-pass/

function sumOfSquares(nums: number[]) {
    let res = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        if (!(n % (i + 1))) res += nums[i] * nums[i];
    }
    return res;
}
