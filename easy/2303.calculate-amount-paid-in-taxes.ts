// https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/7417552/linear-solution/

function calculateTax(brackets: [number, number][], income: number) {
    let res = 0, prev = 0;
    for (const [upper, precent] of brackets) {
        const curr = Math.min(income, upper) - prev;
        res += curr * precent / 100;
        if ((prev += curr) >= income) break;
    }
    return res;
}
