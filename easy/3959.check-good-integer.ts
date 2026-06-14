// https://leetcode.com/problems/check-good-integer/solutions/8334122/two-approaches-math-string/

import _ from 'lodash';

function checkGoodInteger(n: number) {
    let res = 0;
    while (n) {
        res += (n % 10) ** 2 - n % 10;
        n = Math.floor(n / 10);
    }
    return res >= 50;
}

const checkGoodIntegerStr = (n: number) => _.sumBy(`${n}`, (v) => (+v) ** 2 - +v) >= 50;
