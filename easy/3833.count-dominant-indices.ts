// https://leetcode.com/problems/count-dominant-indices/solutions/7592786/linear-time-constant-space/

function dominantIndices(nums: number[]) {
    let n = nums.length, s = nums.reduce((a, b) => a + b);
    return nums.reduce((r, v) => r + +(v > (s -= v) / --n), 0);
}
