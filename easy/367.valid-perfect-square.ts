// https://leetcode.com/problems/valid-perfect-square/

function isPerfectSquare(num: number): boolean {
    let left = 1, right = Math.ceil(num / 2);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = Math.pow(mid, 2);
        if (square === num) return true;
        square < num ? left = mid + 1 : right = mid - 1;
    }
    return false;
}
