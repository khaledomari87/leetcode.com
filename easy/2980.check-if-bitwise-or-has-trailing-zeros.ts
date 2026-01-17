// https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/7501500/clean/

const hasTrailingZeros = (nums: number[], seen = false) =>
    nums.some((num) => {
        if (!(num % 2) && seen) return true;
        return (seen ||= !(num % 2), false);
    });
