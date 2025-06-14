// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/6843301/string-charcode/

function freqAlphabets(s: string) {
    const res: number[] = [], a = 'a'.charCodeAt(0) - 1;
    for (let i = 0, n = s.length; i < n; i++) {
        res.push(+(i < n - 2 && s[i + 2] === '#' ? `${s[i++]}${s[i++]}` : s[i]));
    }
    return res.map((v) => String.fromCharCode(a + v)).join('');
}

const freqAlphabetsOneLine = (s: string) =>
    [...s.matchAll(/((\d\d)#)|(\d)/g)].map((m) =>
        String.fromCharCode('a'.charCodeAt(0) + +(m[2] || m[3]) - 1)
    ).join('');
