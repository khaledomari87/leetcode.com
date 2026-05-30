// https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/8303247/one-line/

const maximumValue = (strs: string[]) => strs.reduce((r, s) => Math.max(r, isNaN(+s) ? s.length : +s), 0);
