// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/solutions/6227984/linear-solution/

// deno-fmt-ignore
function countPalindromicSubsequence(s: string) {
    let res = 0;
    for (let c = 'a'; c <= 'z'; c = String.fromCharCode(c.charCodeAt(0) + 1)) {
        const seen = new Set<string>();
        for (let left = s.indexOf(c), right = s.lastIndexOf(c);
            seen.size < 26 && ++left < right;) seen.add(s[left]);
        res += seen.size;
    }
    return res;
}
