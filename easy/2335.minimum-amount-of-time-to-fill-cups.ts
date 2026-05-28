// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/8299185/two-approaches/

import _ from 'lodash';

function fillCups(amount: number[]) {
    let res = 0;
    while (amount.sort((a, b) => a - b)[2] > 0) {
        res++, amount[1]--, amount[2]--;
    }
    return res;
}

const fillCups2 = (amount: number[]) => Math.max(_.max(amount)!, _.sum(amount) + 1 >> 1);
