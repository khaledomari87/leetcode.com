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
