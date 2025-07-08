// https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/6933770/one-line/

const findTheDistanceValue = (a: number[], b: number[], d: number) =>
    a.reduce((r, n) => r + +b.every((m) => Math.abs(n - m) > d), 0);
