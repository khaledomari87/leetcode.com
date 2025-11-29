// https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/7381606/two-pointers/

// deno-fmt-ignore
function longestAlternatingSubarray(nums: number[], threshold: number) {
    const n = nums.length, next = (start = 0) => {
        for (let i = start; i < n; i++) {
            if (!(nums[i] % 2) && nums[i] <= threshold) return i;
        }
        return Infinity;
    };
    let left = next(), res = +isFinite(left);
    for (let max = Math.max, right = left + 1; right < n; right++) {
        nums[right] > threshold || !(nums[right] % 2 - nums[right - 1] % 2)
            ? (left = next(right), right = left)
            : res = max(res, right - left + 1);
    }
    return res;
}
