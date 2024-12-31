// https://leetcode.com/problems/minimum-cost-for-tickets/solutions/6210050/bottom-up-tabulation-linear-solution/

function mincostTickets(days: number[], costs: [number, number, number]): number {
    const cache = new Array<number>(days.length + 1).fill(0);
    const durToCostMap = [[1, costs[0]], [7, costs[1]], [30, costs[2]]];
    for (let i = days.length - 1; i >= 0; i--) {
        cache[i] = Number.POSITIVE_INFINITY;
        let j = i;
        durToCostMap.forEach((item) => {
            while (j < days.length && days[j] < days[i] + item[0]) j++;
            cache[i] = Math.min(cache[i], cache[j] + item[1]);
        });
    }
    return cache[0];
}
