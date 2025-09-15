// https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/7190916/2-lines/

function canBeTypedWords(text: string, brokenLetters: string) {
    const reg = new RegExp(`[${brokenLetters}]`);
    return text.split(' ').reduce((r, w) => r + +!reg.test(w), 0);
}
