// https://leetcode.com/problems/most-frequent-even-element/solutions/8356636/hash-map/

import _ from 'lodash';

function mostFrequentEven(nums: number[]) {
    const count = _.countBy(nums);
    let res = Infinity, cnt = 0;
    for (const key in count) {
        const n = +key;
        if (n % 2 == 0 && (count[key] > cnt || count[key] == cnt && n < res)) {
            res = n, cnt = count[key];
        }
    }
    return isFinite(res) ? res : -1;
}
