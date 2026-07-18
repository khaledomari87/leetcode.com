// https://leetcode.com/problems/number-of-elapsed-seconds-between-two-times/solutions/8406263/splitting/

const secondsBetweenTimes = (start: string, end: string) =>
    [end, start].map((t) => t.split(':').map((v) => +v))
        .map((t) => 3600 * t[0] + 60 * t[1] + t[2])
        .reduce((a, b) => a - b);
