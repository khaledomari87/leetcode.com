// https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/6321545/one-line/

const findLUSlength = (a: string, b: string) => a === b ? -1 : Math.max(a.length, b.length);
