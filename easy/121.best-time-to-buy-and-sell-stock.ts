// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/5891312/simple-efficient-and-readable/

function maxProfit(prices: number[]): number {
    let result = 0;
    let prev = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const curr = prices[i];
        if (curr > prev) {
            result = Math.max(curr - prev, result);
        } else {
            prev = curr;
        }
    }
    return result;
}
