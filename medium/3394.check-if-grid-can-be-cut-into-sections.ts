// https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/solutions/6576620/clean-line-sweep/

function checkValidCuts(_n: number, rectangles: number[][]) {
    return ([0, 1] as const).some((dim: 0 | 1) => {
        rectangles.sort((a, b) => a[dim] - b[dim]);
        let count = 0, furthestEnd = rectangles[0][dim + 2];
        for (let i = 1; i < rectangles.length; i++) {
            count += +(furthestEnd <= rectangles[i][dim]);
            if (count >= 2) return true;
            furthestEnd = Math.max(furthestEnd, rectangles[i][dim + 2]);
        }
    });
}

function checkValidCuts2(_n: number, rectangles: number[][]) {
    const x = rectangles.map((r) => [r[0], r[2]]).sort((a, b) => a[0] - b[0]);
    const y = rectangles.map((r) => [r[1], r[3]]).sort((a, b) => a[0] - b[0]);
    for (const intervals of [x, y]) {
        let prevEnd = intervals[0][1], count = 0;
        for (let i = 1; i < intervals.length; i++) {
            if (prevEnd <= intervals[i][0] && ++count >= 2) return true;
            prevEnd = Math.max(prevEnd, intervals[i][1]);
        }
    }
    return false;
}
