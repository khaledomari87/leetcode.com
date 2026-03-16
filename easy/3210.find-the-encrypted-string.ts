// https://leetcode.com/problems/find-the-encrypted-string/solutions/7652549/one-line/

// deno-fmt-ignore
const getEncryptedString = (s: string, k: number) =>
    s.substring(k % s.length) + s.substring(0, k % s.length);
