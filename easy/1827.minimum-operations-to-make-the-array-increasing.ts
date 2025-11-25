// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/7373645/prefix-difference/

function minOperations(nums: number[]) {
    let res = 0, prev = -Infinity;
    for (const curr of nums) {
        res += Math.max(0, ++prev - curr);
        prev = Math.max(curr, prev);
    }
    return res;
}
