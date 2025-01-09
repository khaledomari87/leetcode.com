// https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/6253522/one-liner/

const prefixCount = (ws: string[], p: string) => ws.reduce((c, w) => c + +w.startsWith(p), 0);
