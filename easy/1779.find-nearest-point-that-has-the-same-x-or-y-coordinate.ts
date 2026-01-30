// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/7537211/min-distance/

const nearestValidPoint = (x: number, y: number, points: number[][]) =>
    points.reduce((res, point, i) => {
        for (let j = 0; j < 2; j++) {
            if ((j ? y : x) === point[j]) {
                const d = Math.abs((j ? x : y) - point[1 - j]);
                if (d < res[1]) return [i, d];
            }
        }
        return res; // [index, distance]
    }, [-1, Infinity])[0];
