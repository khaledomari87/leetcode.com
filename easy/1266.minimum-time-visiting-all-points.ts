// https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/6829289/clean-ts-js/

// deno-fmt-ignore-file
const { abs, max } = Math;
const minTimeToVisitAllPoints = (points: number[][]) => points.reduce((r, [x, y], i) =>
    r + (!i-- ? 0 : max(abs(x - points[i][0]), abs(y - points[i][1]))), 0);
