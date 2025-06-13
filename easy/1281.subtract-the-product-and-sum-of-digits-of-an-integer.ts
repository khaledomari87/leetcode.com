// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/6838893/math-string-approaches/

function subtractProductAndSum(n: number) {
    let prod = 1, sum = 0;
    for (let remain = n; remain > 0; remain = Math.floor(remain / 10)) {
        const digit = remain % 10;
        prod *= digit, sum += digit;
    }
    return prod - sum;
}

function subtractProductAndSumStr(n: number) {
    let prod = 1, sum = 0;
    for (const digit of n.toString()) {
        prod *= +digit, sum += +digit;
    }
    return prod - sum;
}
