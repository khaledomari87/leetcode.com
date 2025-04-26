// https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/6688182/clean-sliding-window/

function countSubarrays(nums: number[], minK: number, maxK: number) {
    let j = -1, L = -1, R = -1;
    return nums.reduce((res, num, i) => {
        if (num < minK || num > maxK) j = i;
        if (num === maxK) R = i;
        if (num === minK) L = i;
        return res + Math.max(0, Math.min(L, R) - j);
    }, 0);
}
