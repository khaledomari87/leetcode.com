// https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/7425855/linear-solution-prefix-suffix-minima/

// deno-fmt-ignore
function minimumSum(nums: number[]) {
    const [pre, suf] = Array.from({ length: 2 },
        () => Array.from({ length: nums.length }, () => Infinity));
    for (let i = 1, n = nums.length - 1; i < n; i++) {
        pre[i] = Math.min(pre[i - 1], nums[i - 1]);
        suf[n - i] = Math.min(suf.at(-i)!, nums.at(-i)!);
    }

    let res = Infinity;
    for (let i = 1, n = nums.length - 1; i < n; i++) {
        if ([pre, suf].every((arr) => arr[i] < nums[i])) {
            res = Math.min(res, pre[i] + nums[i] + suf[i]);
        }
    }
    return isFinite(res) ? res : -1;
}
