// https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/6639249/math/

function sumBase(n: number, k: number) {
    n = +n.toString(k) * 10;
    let res = 0;
    while ((n = Math.floor(n / 10))) res += n % 10;
    return res;
}
