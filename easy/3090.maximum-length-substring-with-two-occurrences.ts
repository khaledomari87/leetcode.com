// https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/7485651/linear-time-two-pointers/

function maximumLengthSubstring(s: string) {
    const counter = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0), n = s.length;
    let res = 0;
    for (let i = 0, j = 0, max = Math.max; j < n; j++) {
        counter[s.charCodeAt(j) - a]++;
        while (counter[s.charCodeAt(j) - a] > 2) {
            counter[s.charCodeAt(i++) - a]--;
        }
        res = max(res, j - i + 1);
    }
    return res;
}
