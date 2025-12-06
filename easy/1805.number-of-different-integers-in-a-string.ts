// https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/7395805/regexp-bigint/

const numDifferentIntegers = (word: string) =>
    new Set([...word.matchAll(/\d+/g)].map((m) => BigInt(m[0]))).size;
