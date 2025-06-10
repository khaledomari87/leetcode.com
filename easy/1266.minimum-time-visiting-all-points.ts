// https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/6829289/clean-ts-js/

const minTimeToVisitAllPoints = (points: number[][]) =>
    points.reduce(
        (res, p, i) =>
            res + (!i ? 0 : Math.max(
                Math.abs(p[0] - points[i - 1][0]),
                Math.abs(p[1] - points[i - 1][1]),
            )),
        0,
    );
