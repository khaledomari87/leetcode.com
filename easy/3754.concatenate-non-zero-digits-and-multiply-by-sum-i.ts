// https://leetcode.com/problems/concatenate-non-zero-digits-and-multiply-by-sum-i/solutions/7557099/math-based/

function sumAndMultiply(n: number) {
    let x = 0, sum = 0;
    for (let pow = 0; n; n = Math.floor(n / 10)) {
        const dig = n % 10;
        if (dig) {
            x += dig * 10 ** pow;
            sum += dig;
            pow++;
        }
    }
    return x * sum;
}
