// https://leetcode.com/problems/find-the-largest-almost-missing-integer/solutions/7347035/brute-force/

function largestInteger(nums: number[], k: number) {
    const m = new Map<number, number>(), max = Math.max;
    for (let i = 0, n = nums.length - k; i <= n; i++) {
        for (const x of new Set(nums.slice(i, i + k))) {
            m.set(x, (m.get(x) || 0) + 1);
        }
    }
    return [...m].reduce((r, [x, c]) => c === 1 ? max(r, x) : r, -1);
}
