// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/7480533/char-code-bit-manupulation/

function greatestLetter(s: string) {
    const a = 'a'.charCodeAt(0), map: number[] = new Array(26).fill(0);
    for (const c of s) {
        map[c.toLowerCase().charCodeAt(0) - a] |= 1 + +(c < 'a');
    }
    const i = [...map].findLastIndex((v, i) => v === 3 && a + i);
    return i >= 0 ? String.fromCharCode(i + 'A'.charCodeAt(0)) : '';
}
