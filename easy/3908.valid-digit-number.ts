// https://leetcode.com/problems/valid-digit-number/solutions/8097486/string-by-khaled-alomari-1jwj/

function validDigit(n: number, x: number) {
    const s = `${n}`;
    return +s[0] != x && s.indexOf(`${x}`) > -1;
}

function validDigitMath(n: number, x: number) {
    const { floor, log10 } = Math;
    if (floor(n / 10 ** floor(log10(n))) == x) return false;
    for (; n; n = floor(n / 10)) if (n % 10 == x) return true;
    return false;
}
