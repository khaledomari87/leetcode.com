// https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/6828979/clean-ts-js/

function checkStraightLine(coords: number[][]) {
    const [[x1, y1], [x2, y2]] = coords.slice(0, 2), dy = y2 - y1, dx = x2 - x1;
    return coords.every(([x, y]) => (y - y1) * dx === dy * (x - x1));
    // return coords.every(([x, y]) => (y - y2) * dx === dy * (x - x2)); // also works
}
