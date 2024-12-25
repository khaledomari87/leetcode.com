// https://leetcode.com/problems/check-balanced-string/solutions/6184909/two-approaches-two-pointers-or-big-int-b-odsn/

function isBalanced(num: string): boolean {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < num.length; i += 2) {
        sum1 += +num[i];
        i + 1 < num.length && (sum2 += +num[i + 1]);
    }
    return sum1 === sum2;
}

function isBalancedBigInt(num: string): boolean {
    let sum1 = 0n;
    let sum2 = 0n;
    let flag = true;
    let n = BigInt(num);
    while (n > 0) {
        const digit = n % 10n;
        flag ? sum1 += digit : sum2 += digit;
        flag = !flag;
        n = n / 10n;
    }
    return sum1 === sum2;
}
