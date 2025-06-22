// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/6870610/clean-solution/

function divideString(s: string, k: number, x: string) {
    const res: string[] = [], n = s.length;
    for (let i = 0; i + k - 1 < n; i += k) {
        res.push(s.slice(i, i + k));
    }
    const last = n % k;
    if (last > 0) {
        res.push(s.slice(-last) + x.repeat(k - last));
    }
    return res;
}
