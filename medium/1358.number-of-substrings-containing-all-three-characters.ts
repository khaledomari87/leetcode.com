// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/6522040/last-position-tracking/

function numberOfSubstrings(s: string) {
    let res = 0;
    for (let i = 0, last = [-1, -1, -1]; i < s.length; i++) {
        last[s[i] === 'a' ? 0 : s[i] === 'b' ? 1 : 2] = i, res += 1 + Math.min(...last);
    }
    return res;
}
