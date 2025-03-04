// https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/6494459/ternary-representation/

function checkPowersOfThree(n: number) {
    while (n > 0) {
        if (n % 3 === 2) return false;
        n = Math.floor(n / 3);
    }
    return true;
}
