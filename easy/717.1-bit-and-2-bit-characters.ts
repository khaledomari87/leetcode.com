// https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/6434751/increment-pointer/

function isOneBitCharacter(bits: number[]) {
    let i = 0;
    for (const len = bits.length - 1; i < len; i += bits[i] + 1);
    return i === bits.length - 1;
}
