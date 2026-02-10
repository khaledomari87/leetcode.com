// https://leetcode.com/problems/longest-balanced-subarray-i/solutions/7567461/brute-force-by-khaled-alomari-xexv/

function longestBalanced(nums: number[]) {
    let res = 0;
    for (let max = Math.max, l = 0, n = nums.length; l < n; l++) {
        const odd = new Map<number, number>(), even: typeof odd = new Map();
        for (let r = l; r < n; r++) {
            const mp = nums[r] % 2 ? odd : even;
            mp.set(nums[r], (mp.get(nums[r]) || 0) + 1);
            if (odd.size == even.size) res = max(res, r - l + 1);
        }
    }
    return res;
}
