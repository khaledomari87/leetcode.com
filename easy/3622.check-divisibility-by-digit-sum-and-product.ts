// https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/solutions/7536738/two-approaches-string-maths/

function checkDivisibility(n: number) {
    let s = 0, p = 1;
    for (let m = n, flr = Math.floor; m; m = flr(m / 10)) {
        const d = m % 10;
        s += d, p *= d;
    }
    return !(n % (s + p));
}

function checkDivisibilityStr(n: number) {
    let s = 0, p = 1;
    String(n).split('').forEach((v) => {
        s += +v, p *= +v;
    });
    return !(n % (s + p));
}
