// https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/6210103/one-line/

const isSubstringPresent = (s: string) => s.split('').some((c, i) => i > 0 && s.includes(`${c}${s[i - 1]}`));
