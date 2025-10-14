// https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/7274289/very-simple-two-pointers/

function hasIncreasingSubarrays(a: number[], k: number) {
    if (k === 1) return true;
    for (let i = 1, cnt = 1; i + k < a.length; i++) {
        if (a[i] <= a[i - 1] || a[i + k] <= a[i + k - 1]) cnt = 0;
        if (++cnt === k) return true;
    }
    return false;
}
