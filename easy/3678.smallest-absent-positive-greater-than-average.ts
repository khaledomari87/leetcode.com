// https://leetcode.com/problems/smallest-absent-positive-greater-than-average/solutions/7228980/optimal-solution/

function smallestAbsent(nums: number[]) {
    const avg = nums.reduce((a, b) => a + b) / nums.length;
    let res = Math.max(1, Math.floor(avg) + 1);
    const set = new Set(nums);
    while (set.has(res)) res++;
    return res;
}
