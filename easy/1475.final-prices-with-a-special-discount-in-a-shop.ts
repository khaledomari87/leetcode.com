// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/6159114/simple-on2-solution-without-monotonic-st-4pxw/

function finalPrices(prices: number[]): number[] {
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                prices[i] -= prices[j];
                break;
            }
        }
    }
    return prices;
}
