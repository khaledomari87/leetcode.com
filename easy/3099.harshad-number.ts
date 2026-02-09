// https://leetcode.com/problems/harshad-number/solutions/7566800/math-based/

function sumOfTheDigitsOfHarshadNumber(x: number) {
    let s = 0;
    for (let i = x; i; i = Math.floor(i / 10)) {
        s += i % 10;
    }
    return x % s ? -1 : s;
}

function sumOfTheDigitsOfHarshadNumberStr(x: number) {
    const s = String(x).split('').reduce((a, b) => a + +b, 0);
    return x % s ? -1 : s;
}
