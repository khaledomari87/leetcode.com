// https://leetcode.com/problems/number-of-segments-in-a-string/solutions/6291064/one-liner/

const countSegments = (s: string) => s.split(/ +/).filter((c) => c).length;
