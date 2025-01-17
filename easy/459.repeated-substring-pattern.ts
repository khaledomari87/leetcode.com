// https://leetcode.com/problems/repeated-substring-pattern/solutions/6294913/doubling-the-input/

const repeatedSubstringPattern = (s: string) => s.repeat(2).slice(1, -1).includes(s);
// const repeatedSubstringPattern = (s: string) => s.repeat(2).slice(1, s.length * 2 - 1).includes(s);
