// https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6201061/one-line/

function possibleStringCount(word: string) {
    let res = 1;
    for (let i = 1; i < word.length; i++) {
        res += +(word[i] === word[i - 1]);
    }
    return res;
}

// deno-fmt-ignore
const possibleStringCountOneLine = (word: string) => word.split('')
    .reduce((r, s, i, a) => r + +(i && s === a[i - 1]), 1);
