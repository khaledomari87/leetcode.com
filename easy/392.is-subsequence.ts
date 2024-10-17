// https://leetcode.com/problems/is-subsequence/

function isSubsequence(s: string, t: string): boolean {
    let sp = 0; // s pointer
    for (let tp = 0; sp < s.length && tp < t.length; tp++) {
        s[sp] === t[tp] && sp++;
    }
    return sp === s.length;
}
