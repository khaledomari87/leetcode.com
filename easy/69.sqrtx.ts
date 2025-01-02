// https://leetcode.com/problems/sqrtx/solutions/6218720/binary-search/

function mySqrt(x: number): number {
    let l = 0, r = x, res = 0;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const square = mid ** 2;
        if (square > x) {
            r = mid - 1;
        } else {
            l = mid + 1;
            res = mid;
        }
    }
    return res;
}
