// https://leetcode.com/problems/teemo-attacking/solutions/6305662/clean-and-efficient/

function findPoisonedDuration(timeSeries: number[], duration: number) {
    let res = duration;
    for (let i = timeSeries.length - 2; i >= 0; i--) {
        res += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }
    return res;
}
