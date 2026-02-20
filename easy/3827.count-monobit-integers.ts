// https://leetcode.com/problems/count-monobit-integers/solutions/7594062/counting-bits-using-two-approaches/

const countMonobit = (n: number) => Math.floor(Math.log2(n + 1)) + 1;

function countMonobit2(n: number) {
    let res = 1;
    for (n++; n > 1; n >>= 1, res++);
    return res;
}
