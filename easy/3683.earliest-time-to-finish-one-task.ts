// https://leetcode.com/problems/earliest-time-to-finish-one-task/solutions/7228114/one-line/

const earliestTime = (tasks: [number, number][]) =>
    tasks.reduce((r, t) => Math.min(r, t[0] + t[1]), Infinity);
