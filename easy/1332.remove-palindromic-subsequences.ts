// https://leetcode.com/problems/remove-palindromic-subsequences/solutions/6870848/one-line/

const removePalindromeSub = (s: string) => 2 - +(s === s.split('').reverse().join(''));
