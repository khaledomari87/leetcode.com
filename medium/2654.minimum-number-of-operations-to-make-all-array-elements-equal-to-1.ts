// https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/7343109/clean-solution/

function minOperations(nums: number[]) {
    const n = nums.length;
    const c = nums.reduce((r, v) => r + +(v === 1), 0);
    if (c > 0) return n - c;

    const gcd = (a: number, b: number) => {
        while (b) [a, b] = [b, a % b];
        return a;
    };
    let res = Infinity;
    for (let i = 0, min = Math.min; i < n; i++) {
        for (let j = i + 1, g = nums[i]; j < n; j++) {
            if ((g = gcd(g, nums[j])) === 1) {
                res = min(res, j - i);
                break;
            }
        }
    }
    return isFinite(res) ? res + n - 1 : -1;
}
