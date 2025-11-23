// https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/7368626/linear-time-no-extra-space/

function maxSumDivThree(nums: number[]) {
    const total = nums.reduce((a, b) => a + b);
    let mod = total % 3;
    if (mod === 0) return total;

    const single = nums.reduce((r, n) => n % 3 === mod && n < r ? n : r, Infinity);
    mod = 3 - mod;
    const pair = nums.reduce(
        (a, n) => n % 3 === mod ? [...a, n].sort((a, b) => a - b).slice(0, 2) : a,
        [Infinity, Infinity],
    );
    return total - Math.min(single, pair[0] + pair[1]);
}
