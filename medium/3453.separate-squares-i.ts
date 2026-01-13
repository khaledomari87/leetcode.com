// https://leetcode.com/problems/separate-squares-i/solutions/7491300/binary-search/

function separateSquares(squares: number[][]) {
    const err = 1 / 1e5, { min, max } = Math;
    let bot = 0, top = 0, totalArea = 0;
    for (const [, y, l] of squares) totalArea += l * l, top = max(top, y + l);
    for (const halfArea = totalArea /= 2; top - bot > err;) {
        const m = (top + bot) / 2;
        const botArea = squares.reduce((a, [, y, l]) => a + max(0, min(m - y, l)) * l, 0);
        botArea >= halfArea ? top = m : bot = m;
        // const topArea = squares.reduce((a, [, y, l]) => a + max(0, min(l + y - m, l)) * l, 0);
        // topArea <= halfArea ? top = m : bot = m;
    }
    return top;
}
