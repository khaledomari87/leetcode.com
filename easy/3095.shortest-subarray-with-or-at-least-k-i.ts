// https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/7655105/brute-force/

function minimumSubarrayLength(nums: number[], k: number) {
    let res = Infinity;
    for (let n = nums.length, min = Math.min, i = 0; i < n; i++) {
        for (let j = i, sp = 0; j < n && sp < k; j++) {
            sp |= nums[j];
            if (sp >= k) res = min(res, j - i + 1);
        }
    }
    return isFinite(res) ? res : k ? -1 : 1;
}
