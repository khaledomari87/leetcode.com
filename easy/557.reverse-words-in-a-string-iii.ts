// https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/6325553/one-line/

const reverseWords = (s: string) => s.split(' ').map((v) => v.split('').reverse().join('')).join(' ');
