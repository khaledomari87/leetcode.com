// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/7398214/one-line/

const numOfStrings = (patterns: string[], word: string) =>
    patterns.reduce((r, s) => r + +word.includes(s), 0);
