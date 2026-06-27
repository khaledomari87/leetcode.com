// https://leetcode.com/problems/prime-in-diagonal/solutions/8359185/math/

function isPrime(num: number) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3, s = Math.sqrt(num); i <= s; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function diagonalPrime(nums: number[][]) {
    let res = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        for (const j of [i, n - i - 1]) {
            if (isPrime(nums[i][j]) && nums[i][j] > res) res = nums[i][j];
        }
    }
    return res;
}
