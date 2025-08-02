// https://leetcode.com/problems/shuffle-string/solutions/7036562/optimal-solution/

function restoreString(s: string, indices: number[]) {
    const n = s.length, res = new Array(n);
    for (let i = 0; i < n; i++) res[indices[i]] = s[i];
    return res.join('');
}
