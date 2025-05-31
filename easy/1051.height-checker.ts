// https://leetcode.com/problems/height-checker/solutions/6797968/built-in-sort-two-lines/

function heightChecker(heights: number[]) {
    const sorted = heights.toSorted((a, b) => a - b);
    return heights.reduce((cnt, h, i) => cnt + +(h !== sorted[i]), 0);
}
