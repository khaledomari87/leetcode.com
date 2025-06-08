// https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/6823307/simple/

function balancedStringSplit(s: string) {
    let res = 0, track = 0;
    for (const c of s) {
        track += c === 'R' ? 1 : -1;
        res += +!track;
    }
    return res;
}
