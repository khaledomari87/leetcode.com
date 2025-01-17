// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/6295011/xor-then-count-ones-by-shifting/

function minBitFlips(start: number, goal: number) {
    let res = 0;
    for (let xor = start ^ goal; xor > 0; xor >>= 1) {
        res += xor & 1;
    }
    return res;
}
