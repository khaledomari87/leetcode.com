// https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/7350268/sliding-window/

function captureForts(forts: (-1 | 0 | 1)[]) {
    const max = Math.max, n = forts.length;
    let res = 0, l = forts.findIndex((f) => f), r = l;
    if (l === -1) return 0;
    while (++r < n) {
        if (forts[r]) {
            if (forts[l] === -forts[r]) res = max(res, r - l - 1);
            l = r;
        }
    }
    return res;
}
