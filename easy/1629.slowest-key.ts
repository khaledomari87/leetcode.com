// https://leetcode.com/problems/slowest-key/solutions/7275349/one-pass/

function slowestKey(times: number[], keys: string) {
    let max = times[0], res = keys[0];
    for (let i = 1, n = keys.length; i < n; i++) {
        const curr = times[i] - times[i - 1];
        if (curr > max || curr === max && keys[i] > res) {
            res = keys[i], max = curr;
        }
    }
    return res;
}
