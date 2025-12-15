// https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/7416506/one-line/

const checkIfPangram = (s: string) => new Set(s).size === 26;
