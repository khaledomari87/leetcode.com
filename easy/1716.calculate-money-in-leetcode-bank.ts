// https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/7109785/simulation/

function totalMoney(n: number) {
    let res = 0;
    for (let i = 0, min = Math.min; n > 0; i++, n -= 7) {
        const days = min(7, n);
        res += (days * (days + 1) / 2) + days * i;
    }
    return res;
}
