// https://leetcode.com/problems/valid-boomerang/solutions/6795815/area/

const isBoomerang = (points: number[][]) =>
    (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) !==
        (points[0][0] - points[2][0]) * (points[0][1] - points[1][1]);
