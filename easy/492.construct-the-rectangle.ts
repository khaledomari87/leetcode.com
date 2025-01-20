// https://leetcode.com/problems/construct-the-rectangle/solutions/6303324/math/

function constructRectangle(area: number): number[] {
    let width = Math.floor(Math.sqrt(area));
    while (area % width > 0) width--;
    return [area / width, width];
}
