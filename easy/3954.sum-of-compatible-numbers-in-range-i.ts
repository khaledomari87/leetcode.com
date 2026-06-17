// https://leetcode.com/problems/sum-of-compatible-numbers-in-range-i/solutions/8340532/simulation/

function sumOfGoodIntegers(n: number, k: number) {
    let res = 0;
    for (let x = Math.max(0, n - k), y = n + k; x <= y; x++) {
        if (!(n & x)) res += x;
    }
    return res;
}
