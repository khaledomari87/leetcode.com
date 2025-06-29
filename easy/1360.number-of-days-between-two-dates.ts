// https://leetcode.com/problems/number-of-days-between-two-dates/solutions/6899851/clean-elegant/

const days = (d: string) => new Date(d).getTime() / 1000 / 60 / 60 / 24;
const daysBetweenDates = (a: string, b: string) => Math.abs(days(a) - days(b));
