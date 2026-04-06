// https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/7799360/optimal-solution-one-line/

const timeRequiredToBuy = (tickets: number[], k: number) =>
    tickets.reduce((r, v, i, a) => r + Math.min(v, a[k] - +(i > k)), 0);
