// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/6839727/binary-search/

function findSpecialInteger(arr: number[]) {
    const n = arr.length, quarter = n / 4;
    const borders = [n >>> 2, n >>> 1, 3 * n >>> 2];
    for (const b of borders) {
        const cand = arr[b];
        const [left, right] = [[0, b], [b, n]].reduce((res, [l, r], i) => {
            while (l < r) {
                const mid = (l + r) >>> 1;
                if (arr[mid] < cand || i && arr[mid] === cand) l = mid + 1;
                else r = mid;
            }
            return res[i] = l, res;
        }, [-1, -1]);
        if (right - left > quarter) return cand;
    }
    throw new Error('Invalid Input!');
}
