// https://leetcode.com/problems/find-minimum-log-transportation-cost/solutions/7644121/constant-time-space/

const minCuttingCost = (n: number, m: number, k: number) => k * Math.max(0, Math.max(m, n) - k);
