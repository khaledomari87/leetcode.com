// https://leetcode.com/problems/crawler-log-folder/solutions/7254392/simplest/

function minOperations(logs: string[]) {
    let res = 0;
    for (const log of logs) {
        if (log === '../') res = Math.max(0, res - 1);
        else res += +(log !== './');
    }
    return res;
}
