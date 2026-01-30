// https://leetcode.com/problems/array-reduce-transformation/solutions/7536688/clean-tsjs/

function reduce<T, U>(nums: U[], fn: (a: T, b: U) => T, init: T) {
    let res = init;
    nums.forEach((v) => res = fn(res, v));
    return res;
}
