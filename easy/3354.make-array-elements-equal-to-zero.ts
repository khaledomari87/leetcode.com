// https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/7306898/prefix-suffix-sums/

function countValidSelections(nums: number[]) {
    const n = nums.length;
    const prefix = new Array<number>(n).fill(0);
    const suffix = new Array<number>(n).fill(0);
    for (let l = 1, r = n - 2; l < n; l++, r--) {
        prefix[l] = prefix[l - 1] + nums[l - 1];
        suffix[r] = suffix[r + 1] + nums[r + 1];
    }
    let res = 0;
    for (let i = 0, abs = Math.abs; i < n; i++) {
        const diff = abs(prefix[i] - suffix[i]);
        if (!nums[i] && diff <= 1) res += 2 - diff;
    }
    return res;
}
