// https://leetcode.com/problems/shifting-letters-ii/solutions/6233304/prefix-sum/

function shiftingLetters(s: string, shifts: [number, number, 0 | 1][]) {
    const prefix = new Array<number>(s.length + 1).fill(0);
    for (const [l, r, d] of shifts) {
        prefix[r + 1] += d ? 1 : -1;
        prefix[l] += d ? -1 : 1;
    }

    const aAscii = 'a'.charCodeAt(0);
    const outputAscii = new Array<number>(s.length);
    for (let i = 0; i < s.length; i++) {
        outputAscii[i] = s[i].charCodeAt(0) - aAscii;
    }

    for (let i = prefix.length - 1, diff = 0; i >= 0; i--) {
        diff += prefix[i];
        // we need to make sure outputAscii[i - 1] is > 0
        // shifts.length <= 50000
        // 50000 / 26 = 1924
        outputAscii[i - 1] = (outputAscii[i - 1] + diff + 1924 * 26) % 26;
    }

    return outputAscii.map((code) => String.fromCharCode(code + aAscii)).join('');
}
