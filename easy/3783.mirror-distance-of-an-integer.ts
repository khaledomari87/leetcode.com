// https://leetcode.com/problems/mirror-distance-of-an-integer/solutions/7555288/one-line/

// deno-fmt-ignore
const mirrorDistance = (n: number) => Math.abs(
    n - +String(n).split('').reverse().join(''));

function mirrorDistanceMath(n: number) {
    const { floor, log10: log, abs } = Math;
    let res = n;
    for (let p = floor(log(n)); n; p--) {
        res -= n % 10 * (10 ** p);
        n = floor(n / 10);
    }
    return abs(res);
}
