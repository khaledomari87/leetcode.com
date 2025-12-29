// https://leetcode.com/problems/reverse-prefix-of-word/solutions/7448786/two-lines/

function reversePrefix(w: string, ch: string) {
    const i = w.indexOf(ch);
    return w.slice(0, i + 1).split('').reverse().join('') + w.slice(i + 1);
}
