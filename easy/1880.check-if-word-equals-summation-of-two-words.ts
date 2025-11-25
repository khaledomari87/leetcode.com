// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/7372199/two-lines/

const num = (s: string) => +s.split('').map((c) => c.charCodeAt(0) - 97).join('');
const isSumEqual = (first: string, second: string, target: string) =>
    num(first) + num(second) === num(target);
