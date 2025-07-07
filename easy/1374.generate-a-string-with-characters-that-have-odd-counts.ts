// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/6932404/one-line/

const generateTheString = (n: number) => 'a'.repeat(n - 1 + n % 2) + 'b'.repeat(1 - n % 2);
