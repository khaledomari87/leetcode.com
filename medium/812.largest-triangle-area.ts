// https://leetcode.com/problems/largest-triangle-area/solutions/7227536/shoelace-formula/

function largestTriangleArea(P: [number, number][]) {
    let res = 0;
    for (let i = 0, { max, abs } = Math, n = P.length; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const [[xi, yi], [xj, yj], [xk, yk]] = [P[i], P[j], P[k]];
                res = max(res, .5 * abs(xi * (yj - yk) + xj * (yk - yi) + xk * (yi - yj)));
            }
        }
    }
    return res;
}
