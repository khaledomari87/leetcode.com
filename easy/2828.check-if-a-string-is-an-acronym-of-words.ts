// https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/6063102/one-line/

const isAcronym = (ws: string[], s: string) => ws.length === s.length && ws.every((w, i) => w[0] === s[i]);
