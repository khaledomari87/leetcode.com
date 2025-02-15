// https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/6424622/very-clear-ts-js/

function punishmentNumber(end: number) {
    const check = (n: number, tar: number): boolean => {
        if (tar < 0 || n < tar || n === tar) return n === tar;
        return [10, 100, 1000].some(
            (div) => check(Math.floor(n / div), tar - n % div),
        );
    };
    let res = 0;
    for (let curr = 1, sqr = 1; curr <= end; sqr = ++curr ** 2) {
        if (check(sqr, curr)) res += sqr;
    }
    return res;
}
