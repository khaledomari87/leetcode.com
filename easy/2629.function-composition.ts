// https://leetcode.com/problems/function-composition/solutions/7168961/one-line/

type F = (x: number) => number;
const compose = (fns: F[]): F => (x) => fns.reduceRight((num, f) => f(num), x);
