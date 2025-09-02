// https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/7146548/sort-enumeration/

function numberOfPairs(points: [number, number][]) {
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let res = 0;
    for (let i = 0, n = points.length - 1; i < n; i++) {
        let xLow = points[i][0] - 1, yLow = -Infinity;
        const xHigh = Infinity, yHigh = points[i][1] + 1;
        for (let j = i + 1; j < points.length; j++) {
            if (
                points[j][0] > xLow && points[j][0] < xHigh &&
                points[j][1] > yLow && points[j][1] < yHigh
            ) {
                res++, xLow = points[j][0], yLow = points[j][1];
            }
        }
    }
    return res;
}
