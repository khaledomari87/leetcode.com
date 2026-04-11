// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/solutions/7831446/linear-solution/

function countKDifference(nums: number[], k: number) {
    const mp = nums.reduce(
        (m, v) => m.set(v, (m.get(v) || 0) + 1),
        new Map<number, number>(),
    );
    return nums.reduce((r, v) => r + (mp.get(v - k) || 0), 0);
}
