// https://leetcode.com/problems/score-of-a-string/solutions/7402646/linear-solution/

function scoreOfString(s: string) {
    let res = 0;
    for (let i = 0, abs = Math.abs, n = s.length - 1; i < n; i++) {
        res += abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return res;
}
