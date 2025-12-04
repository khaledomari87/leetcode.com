// https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/7391803/simple-math/

function hardestWorker(_: number, logs: [number, number][]) {
    let res = logs[0]; // [id, duration]
    for (let i = 1, n = logs.length; i < n; i++) {
        const d = logs[i][1] - logs[i - 1][1];
        if (d > res[1] || d === res[1] && logs[i][0] < res[0]) {
            res = [logs[i][0], d];
        }
    }
    return res[0];
}
