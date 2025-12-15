// https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/7415180/one-pass-constant-space/

function getDescentPeriods(prices: number[]) {
    let res = 0;
    for (let i = 0, cnt = 0, n = prices.length; i < n; i++) {
        if (i && prices[i - 1] - 1 !== prices[i]) cnt = 0;
        res += ++cnt;
    }
    return res;
}
