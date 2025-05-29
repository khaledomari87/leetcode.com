// https://leetcode.com/problems/complement-of-base-10-integer/solutions/6793584/constant-time/

const bitwiseComplement = (n: number, { floor, log2 } = Math) =>
    !n ? 1 : n ^ parseInt('1'.repeat(floor(log2(n)) + 1), 2);
