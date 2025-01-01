// https://leetcode.com/problems/reverse-bits/solutions/6215009/let-s-make-things-simple-two-lines-solution-60ms/

function reverseBits(n: number): number {
    const bits = n.toString(2);
    return parseInt(`${'0'.repeat(32 - bits.length)}${bits}`.split('').reverse().join(''), 2);
}
