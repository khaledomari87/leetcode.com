// https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/7979831/two-approaches/

const isFascinating = (n: number) => `${n}${2 * n}${3 * n}`.split('').sort().every((v, i) => +v === i + 1);

const isFascinating2 = (n: number) => [192, 219, 273, 327].includes(n);
