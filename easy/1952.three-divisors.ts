// https://leetcode.com/problems/three-divisors/solutions/7485680/clean/

function isThree(n: number) {
    let cnt = 0;
    for (let i = 2, n2 = n / 2; i <= n2; i++) {
        if ((cnt += +!(n % i)) > 1) return false;
    }
    return cnt === 1;
}
