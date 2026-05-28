// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/8297941/optimal-solution/

function digitCount(num: string) {
    const cnt = new Array<number>(10).fill(0);
    for (const d of num) cnt[+d]++;
    for (let i = 0; i < num.length; i++) {
        if (cnt[i] !== +num[i]) return false;
    }
    return true;
}
