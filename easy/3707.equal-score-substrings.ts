// https://leetcode.com/problems/equal-score-substrings/solutions/7418096/prefix-sum/

function scoreBalance(s: string) {
    const n = s.length;
    const a = 'a'.charCodeAt(0) - 1;
    let left = s.charCodeAt(0) - a;
    let right = 0;
    for (let i = 1; i < n; i++) {
        right += s.charCodeAt(i) - a;
    }
    for (let i = 1; i < n; i++) {
        if (right === left) return true;
        right -= s.charCodeAt(i) - a;
        left += s.charCodeAt(i) - a;
    }
    return false;
}
