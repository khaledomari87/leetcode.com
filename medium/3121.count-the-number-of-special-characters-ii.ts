// https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/7419448/first-last-index/

function numberOfSpecialChars(word: string) {
    const upper = new Array(26).fill(Infinity);
    const lower = new Array(26).fill(-Infinity);
    const A = 'A'.charCodeAt(0), a = A + 32;
    for (let i = 0, n = word.length; i < n; i++) {
        const isUpper = word[i] <= 'Z';
        const arr = isUpper ? upper : lower;
        const idx = word.charCodeAt(i) - (isUpper ? A : a);
        arr[idx] = Math[isUpper ? 'min' : 'max'](arr[idx], i);
    }
    return lower.reduce((r, l, i) => r + +(isFinite(l + upper[i]) && l < upper[i]), 0);
}
