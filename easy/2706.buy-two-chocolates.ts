// https://leetcode.com/problems/buy-two-chocolates/solutions/7405342/greedy-linear-solution/

function buyChoco(prices: number[], money: number) {
    let min2 = Infinity, min1 = Infinity;
    for (const p of prices) {
        if (p <= min2) min1 = min2, min2 = p;
        else if (p < min1) min1 = p;
    }
    const res = money - min1 - min2;
    return res >= 0 ? res : money;
}
