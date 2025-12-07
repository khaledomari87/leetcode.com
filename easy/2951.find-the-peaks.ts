// https://leetcode.com/problems/find-the-peaks/solutions/7397572/clean/

function findPeaks(m: number[]) {
    const n = m.length - 1, res: number[] = [];
    for (let i = 1, n = m.length - 1; i < n; i++) {
        if (m[i - 1] < m[i] && m[i] > m[i + 1]) {
            res.push(i++);
        }
    }
    return res;
}
