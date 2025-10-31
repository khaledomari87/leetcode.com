// https://leetcode.com/problems/alternating-digit-sum/solutions/7316144/all-three-approaches/

function alternateDigitSumLeftToRightMath(n: number) {
    const { floor, log10: log } = Math;
    let res = 0, sign = -1, power = 10 ** floor(log(n));
    while (power) {
        const leftDigit = floor(n / power);
        res += (sign *= -1) * leftDigit;
        n -= leftDigit * power;
        power /= 10;
    }
    return res;
}

function alternateDigitSumRightToLeftMath(n: number) {
    const { floor } = Math;
    let res = 0, sign = 1;
    while (n) {
        const rightDigit = n % 10;
        res += (sign *= -1) * rightDigit;
        n = floor(n / 10);
    }
    return sign * res;
}

function alternateDigitSumString(n: number) {
    const s = String(n), m = s.length;
    let res = 0, i = 0, sign = -1;
    while (i < m) res += (sign *= -1) * +s[i++];
    return res;
}
