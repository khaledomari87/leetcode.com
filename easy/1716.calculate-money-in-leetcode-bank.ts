// https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/7109785/simulation/

function totalMoney(n: number) {
    let res = 0;
    for (let i = 0, min = Math.min; n > 0; i++, n -= 7) {
        const days = min(7, n);
        res += (days * (days + 1) / 2) + days * i;
    }
    return res;
}

// deno-fmt-ignore
function totalMoney2(n: number) {
    const ArithmeticSum = (m: number) => m * (m + 1) / 2;
    const fullWeeks = Math.floor(n / 7);
    const lastWeekRemainder = n % 7;
    return (
        ArithmeticSum(7) * fullWeeks +     // Money for all full weeks
        ArithmeticSum(fullWeeks - 1) * 7 + // Money for the +1 on each Monday
        ArithmeticSum(lastWeekRemainder) + // Remainder money
        fullWeeks * lastWeekRemainder      // Remainder money for the +1
    );
}
