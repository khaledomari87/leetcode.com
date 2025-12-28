// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/7446194/simple-clean/

function isPrefixString(s: string, words: string[]) {
    let res = '';
    for (const w of words) {
        if ((res += w).length >= s.length) break;
    }
    return res === s;
}
