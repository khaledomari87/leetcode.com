// https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/7453192/optimal-solution/

function minimumMoves(s: string, skip = 2) {
    let res = 0;
    for (let i = 0, n = s.length; i < n; i++) {
        if (s[i] === 'X') {
            res++;
            i += skip;
        }
    }
    return res;
}
