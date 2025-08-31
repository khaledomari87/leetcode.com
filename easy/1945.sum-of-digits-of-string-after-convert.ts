// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/7138516/two-approaches/

function getLucky(s: string, k: number) {
    const a = 'a'.charCodeAt(0) - 1;
    let res = s.split('').map((c) => c.charCodeAt(0) - a).join('');
    while (k--) res = `${res.split('').reduce((s, d) => s + +d, 0)}`;
    return +res;
}

function getLuckyMath(s: string, k: number) {
    const a = 'a'.charCodeAt(0) - 1;
    let res = 0n;
    for (let i = s.length - 1, pow = 0n; i >= 0; i--) {
        let num = BigInt(s[i].charCodeAt(0) - a);
        while (num) {
            res += num % 10n * (10n ** pow++);
            num = num / 10n;
        }
    }
    while (k--) {
        let sum = 0n;
        while (res) {
            sum += res % 10n;
            res = res / 10n;
        }
        res = sum;
    }
    return Number(res);
}
