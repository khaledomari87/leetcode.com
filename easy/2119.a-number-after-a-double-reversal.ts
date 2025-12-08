// https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/7401002/one-line/

const isSameAfterReversals = (num: number) => !(num * +!(num % 10));
const isSameAfterReversals2 = (num: number) => !num || num % 10 > 0;
