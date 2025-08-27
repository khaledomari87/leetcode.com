// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/7128828/two-lines/

function countGoodRectangles(rectangles: [number, number][]) {
    const { min, max } = Math;
    const maxLen = rectangles.reduce((res, rec) => max(res, min(...rec)), 0);
    return rectangles.reduce((cnt, rec) => cnt + +(min(...rec) === maxLen), 0);
}
