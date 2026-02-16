// https://leetcode.com/problems/reverse-bits/solutions/6215009/let-s-make-things-simple-two-lines-solution-60ms/

// deno-fmt-ignore
function reverseBits(n: number) {
    const bits = n.toString(2);
    return parseInt(`${'0'.repeat(32 - bits.length)}${bits}`
        .split('').reverse().join(''), 2);
}

function reverseBits2(n: number) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res = (res << 1) + (n & 1);
        n >>= 1;
    }
    return res;
}
