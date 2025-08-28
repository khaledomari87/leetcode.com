// https://leetcode.com/problems/calculate-delayed-arrival-time/solutions/7132641/one-line/

const findDelayedArrivalTime = (a: number, d: number) => (a + d) % 24;
