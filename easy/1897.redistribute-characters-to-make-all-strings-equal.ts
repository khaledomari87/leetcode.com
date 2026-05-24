// https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/8278591/counter/

const makeEqual = (words: string[], a = 'a'.charCodeAt(0)) =>
    words.reduce((c, w) => {
        for (let i = 0; i < w.length; i++) c[w.charCodeAt(i) - a]++;
        return c;
    }, new Array<number>(26).fill(0)).every((v) => !(v % words.length));
