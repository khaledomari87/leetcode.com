// https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/6785877/three-approaches/

function differenceOfSums(n: number, m: number) {
    let res = 0;
    while (n) res += (n % m ? 1 : -1) * n--;
    return res;
}

const differenceOfSumsOneLine = (n: number, m: number) =>
    Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + (b % m ? 1 : -1) * b, 0);

const differenceOfSumsMath = (n: number, m: number) =>
    n * (n + 1) / 2 - Math.floor(n / m) * (Math.floor(n / m) + 1) * m;
