// https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/7089725/two-pointers-o-n/

function containsPattern(arr: number[], m: number, k: number) {
    const n = arr.length, len = (k - 1) * m;
    for (let i = 0, cnt = 0; i + m < n; i++) {
        if ((cnt += arr[i] === arr[i + m] ? 1 : -cnt) === len) return true;
    }
    return false;
}
