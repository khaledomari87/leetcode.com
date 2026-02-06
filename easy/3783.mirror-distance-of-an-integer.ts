// https://leetcode.com/problems/mirror-distance-of-an-integer/solutions/7555288/one-line/

// deno-fmt-ignore
const mirrorDistance = (n: number) => Math.abs(
    n - +String(n).split('').reverse().join(''));
