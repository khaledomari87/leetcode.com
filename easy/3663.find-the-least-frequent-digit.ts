// https://leetcode.com/problems/find-the-least-frequent-digit/solutions/7381040/two-approaches-math-string/

function getLeastFrequentDigit(n: number) {
    const freq = new Array<number>(10).fill(0);

    while (n) freq[n % 10]++, n = Math.floor(n / 10);
    // String(n).split('').forEach((dig) => freq[+dig]++);

    let resDig = Infinity, resCnt = Infinity;
    freq.map((cnt) => cnt ? cnt : Infinity).forEach((cnt, dig) => {
        if (cnt < resCnt || cnt === resCnt && dig < resDig) {
            resCnt = cnt;
            resDig = dig;
        }
    });
    return resDig;
}
