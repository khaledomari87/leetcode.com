// https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/7418557/boolean-counter/

function numberOfSpecialChars(word: string) {
    const m = Array.from({ length: 32 }, () => [false, false]);
    const A = 'A'.charCodeAt(0);
    for (const ch of word) {
        const old = m[ch.toUpperCase().charCodeAt(0) - A];
        old[0] ||= ch <= 'Z', old[1] ||= ch > 'Z';
    }
    return m.filter(([L, U]) => L && U).length;
}
