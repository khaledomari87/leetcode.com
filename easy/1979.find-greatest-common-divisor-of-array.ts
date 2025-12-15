// https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/7415832/gcd-on/

function findGCD(nums: number[]) {
    const { min, max } = Math;
    let a = nums.reduce((a, b) => min(a, b));
    let b = nums.reduce((a, b) => max(a, b));
    while (a) [a, b] = [b % a, a];
    return b;
}
