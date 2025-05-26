// https://leetcode.com/problems/add-to-array-form-of-integer/solutions/6777760/one-line-using-bigint/

const addToArrayForm = (num: number[], k: number) =>
    String(BigInt(num.join('')) + BigInt(k)).split('').map((v) => +v);
