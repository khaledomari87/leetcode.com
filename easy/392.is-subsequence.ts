// https://leetcode.com/problems/is-subsequence/solutions/5891141/simple-efficient-and-readable/

function isSubsequence(s: string, t: string): boolean {
    let sp = 0; // s pointer
    for (let tp = 0; sp < s.length && tp < t.length; tp++) {
        s[sp] === t[tp] && sp++;
    }
    return sp === s.length;
}
