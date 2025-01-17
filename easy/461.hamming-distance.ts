// https://leetcode.com/problems/hamming-distance/solutions/6294995/xor-then-count-ones-by-shifting/

function hammingDistance(x: number, y: number): number {
    let xor = x ^ y;
    let res = 0;
    while (xor > 0) {
        res += xor & 1;
        xor >>= 1;
    }
    return res;
}
