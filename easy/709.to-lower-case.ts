// https://leetcode.com/problems/to-lower-case/solutions/6414784/ascii-manipulation/

function toLowerCase(s: string): string {
    const diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
    const res = new Array<string>(s.length);
    for (let i = 0; i < s.length; i++) {
        res[i] = s[i] >= 'A' && s[i] <= 'Z' ? String.fromCharCode(s[i].charCodeAt(0) + diff) : s[i];
    }
    return res.join('');
}
