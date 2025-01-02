// https://leetcode.com/problems/plus-one/solutions/6218448/simple-and-readable/

function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;
    digits[i]++;
    while (digits[i] > 9 && i > 0) {
        digits[i] = 0;
        digits[--i]++;
    }
    if (digits[0] > 9) {
        digits[0] %= 10;
        digits.unshift(1);
    }
    return digits;
}
