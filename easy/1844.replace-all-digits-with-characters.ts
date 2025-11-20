// https://leetcode.com/problems/replace-all-digits-with-characters/solutions/7362492/one-line/

// deno-fmt-ignore
const replaceDigits = (s: string) => Array.from({ length: s.length }, (_, i) =>
    i % 2 ? String.fromCharCode(s.charCodeAt(i - 1) + +s[i]) : s[i]).join('');
