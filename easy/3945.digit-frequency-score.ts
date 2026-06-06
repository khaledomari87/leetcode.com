// https://leetcode.com/problems/digit-frequency-score/solutions/8318278/one-line/

const digitFrequencyScore = (n: number) => [...`${n}`].reduce((a, b) => a + +b, 0);
