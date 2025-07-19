// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/6979471/math-without-sorting/

function canMakeArithmeticProgression(arr: number[]) {
    const set = new Set(arr);
    if (set.size === 1) return true;
    const max = arr.reduce((a, b) => Math.max(a, b));
    const min = arr.reduce((a, b) => Math.min(a, b));
    const step = (max - min) / (arr.length - 1);
    for (let i = min; i <= max; i += step) {
        if (!set.has(i)) return false;
    }
    return true;
}
