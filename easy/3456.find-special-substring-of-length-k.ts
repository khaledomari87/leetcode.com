// https://leetcode.com/problems/find-special-substring-of-length-k/solutions/7383429/two-approaches-counting-two-pointers/

function hasSpecialSubstring(s: string, k: number) {
    for (let c = 1, i = 0, n = s.length; i < n; i++, c++) {
        if (!i || s[i] !== s[i - 1]) c = 1;
        if (c === k && (i + 1 === n || s[i] !== s[i + 1])) return true;
    }
    return false;
}

function hasSpecialSubstring2(s: string, k: number) {
    for (let l = 0, r = 0, n = s.length; r < n; r++) {
        if (r - l + 1 === k && (r + 1 === n || s[r] !== s[r + 1])) return true;
        if (r + 1 < n && s[r] !== s[r + 1]) l = r + 1;
    }
    return false;
}
