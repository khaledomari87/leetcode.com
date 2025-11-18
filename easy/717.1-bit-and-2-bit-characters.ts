// https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/6434751/increment-pointer/

function isOneBitCharacter(bits: number[]) {
    const n = bits.length - 1;
    let i = 0;
    while (i < n) i += bits[i] + 1;
    return i === n;
}
