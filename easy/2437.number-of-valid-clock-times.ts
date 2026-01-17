// https://leetcode.com/problems/number-of-valid-clock-times/solutions/7503162/if-else/

function countTime(time: string) {
    let res = time[0] === '?' && time[1] === '?' ? 24 : 1;
    if (res === 1) {
        [[0, 4, 3, 2], [1, 2, 10, 4]].forEach(([i, t, v1, v2]) => {
            if (time[i] === '?') {
                res *= time[1 - i] === '?' || +time[1 - i] < t ? v1 : v2;
            }
        });
    }
    [[3, 6], [4, 10]].forEach(([i, v]) => time[i] === '?' && (res *= v));
    return res;
}
