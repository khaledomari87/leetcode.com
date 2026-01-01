// https://leetcode.com/problems/plus-one/solutions/6218448/simple-and-readable/

function plusOne(digits: number[]) {
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

const plusOneBigInt = (digits: number[], plus = 1) =>
    String(BigInt(digits.join('')) + BigInt(plus))
        .split('').map((v) => +v);
