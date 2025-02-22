// https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/6453935/constant-space/

function dominantIndex(nums: number[]) {
    const idx = nums.reduce((p, c, i) => i === 0 || c > nums[p] ? i : p, 0);
    for (let i = 0, maxVal = nums[idx]; i < nums.length; i++) {
        if (i !== idx && nums[i] * 2 > maxVal) return -1;
    }
    return idx;
}
