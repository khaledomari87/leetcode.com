// https://leetcode.com/problems/number-of-senior-citizens/solutions/7997966/one-line/

const countSeniors = (details: string[]) => details.reduce((r, v) => r + +(+v.substring(11, 13) > 60), 0);
