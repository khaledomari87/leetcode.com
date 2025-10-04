// https://leetcode.com/problems/richest-customer-wealth/solutions/7248338/one-line/

// deno-fmt-ignore-file
const maximumWealth = (accounts: number[][], max = Math.max) =>
    accounts.reduce((r, v) => max(r, v.reduce((a, b) => a + b)), 0);
    // Math.max(...accounts.map((v) => v.reduce((a, b) => a + b)));
