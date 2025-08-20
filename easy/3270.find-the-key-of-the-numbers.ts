// https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/7104255/clean-solution/

function generateKey(...nums: number[]) {
    let res = 0;
    for (let i = 0, { min, floor } = Math; i < 4; i++) {
        res += nums.reduce((a, b) => min(a % 10, b % 10)) * 10 ** i;
        nums.forEach((n, j, arr) => arr[j] = floor(n / 10));
    }
    return res;
}
