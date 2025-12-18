// https://leetcode.com/problems/reverse-degree-of-a-string/solutions/7422793/simulation/

function reverseDegree(s: string) {
    const n = s.length, a = 'a'.charCodeAt(0) + 26;
    let res = 0;
    for (let i = 0; i < n; i++) {
        res += (a - s.charCodeAt(i)) * (i + 1);
    }
    return res;
}
