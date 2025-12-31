// https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/7452970/one-line/

const countPrefixes = (ws: string[], s: string) => ws.reduce((c, w) => c + +s.startsWith(w), 0);
