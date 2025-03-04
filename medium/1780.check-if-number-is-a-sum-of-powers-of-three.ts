// https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/6494459/optimal-solutions-two-approaches/

function checkPowersOfThree(n: number) {
    while (n > 0) {
        if (n % 3 === 2) return false;
        n = Math.floor(n / 3);
    }
    return true;
}

function checkPowersOfThree2(n: number) {
    let res = 0, power = 14; // 3^14 = max(n)
    while (power >= 0) {
        const candidate = 3 ** power--;
        if (res + candidate <= n) {
            res += candidate;
            if (res === n) return true;
        }
    }
    return false;
}
