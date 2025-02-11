// https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/6406730/bit-manipulation/

function hasAlternatingBits(n: number) {
    let prev = n & 1;
    while ((n >>>= 1) > 0) {
        const rightBit = n & 1;
        if (prev === rightBit) return false;
        prev = rightBit;
    }
    return true;
}
