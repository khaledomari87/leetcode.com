// https://leetcode.com/problems/lexicographically-smallest-palindrome/solutions/7997888/one-line/

const makeSmallestPalindrome = (s: string) =>
    s.split('').map((v, i) => v < s.at(-i - 1)! ? v : s.at(-i - 1)!).join('');
