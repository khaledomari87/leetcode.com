// https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/7108195/clean-solution/

function minimumArea(grid: (1 | 0)[][]) {
    const { min, max } = Math;
    let xLo = Infinity, yLo = xLo;
    let xHi = -Infinity, yHi = xHi;
    grid.forEach((row, i) =>
        row.forEach((bin, j) => {
            if (bin) {
                xLo = min(xLo, i), yLo = min(yLo, j);
                xHi = max(xHi, i), yHi = max(yHi, j);
            }
        })
    );
    return (xHi - xLo + 1) * (yHi - yLo + 1);
}
