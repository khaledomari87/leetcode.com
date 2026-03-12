// https://leetcode.com/problems/minimum-cost-to-reach-every-position/solutions/7644196/prefix-sum-in-place/

function minCosts(cost: number[]) {
    for (let i = 1, n = cost.length; i < n; i++) {
        if (cost[i - 1] < cost[i]) {
            cost[i] = cost[i - 1];
        }
    }
    return cost;
}
