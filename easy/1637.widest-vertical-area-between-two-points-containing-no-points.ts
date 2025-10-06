// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/7252890/sorting/

function maxWidthOfVerticalArea(points: [number, number][]) {
    let res = 0;
    for (let i = 1, n = points.sort((a, b) => a[0] - b[0]).length; i < n; i++) {
        res = Math.max(res, points[i][0] - points[i - 1][0]);
    }
    return res;
}
