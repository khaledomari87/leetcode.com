// https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6043262/binary-search/

function minimizedMaximum(n: number, quants: number[]): number {
    let left = 1, // 0 will never work
        right = 100_000, // quants.reduce((prev, curr) => Math.max(prev, curr)), // max number in array
        x = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (quants.reduce((prev, curr) => prev + Math.ceil(curr / mid), 0) <= n) {
            x = mid;
            right = mid - 1; // we try to find a lower x in the left window
        } else {
            left = mid + 1;
        }
    }
    return x;
}
