// https://leetcode.com/problems/find-words-containing-character/solutions/6775341/one-line/

const findWordsContaining = (words: string[], x: string) =>
    words.reduce(
        (res, w, i) => (w.includes(x) && res.push(i), res),
        [] as number[],
    );
