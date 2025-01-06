// https://leetcode.com/problems/min-cost-climbing-stairs/solutions/6238133/recursion-memoization-and-dynamic-programming/

function minCostClimbingStairsBF(cost: number[]) {
    const backtrack = (i: number): number => {
        if (i < 0) return 0;
        return cost[i] + Math.min(backtrack(--i), backtrack(--i));
    };
    return Math.min(backtrack(cost.length - 1), backtrack(cost.length - 2));
}

function minCostClimbingStairsMemo(cost: number[]) {
    const cache = new Array<number>(cost.length);
    const backtrack = (i: number): number => {
        if (i < 0) return 0;
        if (cache[i] !== undefined) return cache[i];
        return (cache[i] = Math.min(cost[i] + backtrack(i - 1), cost[i] + backtrack(i - 2)));
    };
    return Math.min(backtrack(cost.length - 1), backtrack(cost.length - 2));
}

function minCostClimbingStairsDP(cost: number[]) {
    let previous = cost[0];
    let penultimate = cost[1];
    for (let i = 2; i < cost.length; i++) {
        [penultimate, previous] = [cost[i] + Math.min(previous, penultimate), penultimate];
    }
    return Math.min(previous, penultimate);
}
