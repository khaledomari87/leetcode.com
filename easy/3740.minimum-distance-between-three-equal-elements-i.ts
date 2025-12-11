// https://leetcode.com/problems/minimum-distance-between-three-equal-elements-i/solutions/7407331/sliding-window-linear-solution/

function minimumDistance(nums: number[]) {
    const indices = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        if (!indices.has(nums[i])) indices.set(nums[i], []);
        indices.get(nums[i])!.push(i);
    }
    let res = Infinity;
    for (const a of indices.values()) {
        for (let i = 2; i < a.length; i++) {
            res = Math.min(res, 2 * a[i] - 2 * a[i - 2]);
        }
    }
    return isFinite(res) ? res : -1;
}
