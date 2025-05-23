// https://leetcode.com/problems/neighboring-bitwise-xor/solutions/6292329/two-approaches-one-liner/

const doesValidArrayExist = (der: number[]) => !der.reduce((r, e) => r ^ e);

const doesValidArrayExist2 = (der: number[]) => der.reduce((r, e) => r + e) % 2 === 0;
