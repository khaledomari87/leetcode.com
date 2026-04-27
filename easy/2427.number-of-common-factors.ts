// https://leetcode.com/problems/number-of-common-factors/solutions/8101596/math/

function commonFactors(a: number, b: number) {
    let res = 1 + +(a > 1 && !(Math.max(a, b) % Math.min(a, b)));
    for (let i = 2, end = Math.min(a, b) >> 1; i <= end; i++) {
        res += +(!(a % i) && !(b % i));
    }
    return res;
}
