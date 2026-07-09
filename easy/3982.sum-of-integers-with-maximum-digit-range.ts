// https://leetcode.com/problems/sum-of-integers-with-maximum-digit-range/solutions/8387011/two-approaches-math-string/

import _ from 'lodash';

function maxDigitRange(nums: number[]) {
    const { min, max, floor } = Math;
    let diff = 0, res = 0;
    for (const num of nums) {
        let mn = 9, mx = 0;
        for (let tmp = num; tmp; tmp = floor(tmp / 10)) {
            mn = min(mn, tmp % 10), mx = max(mx, tmp % 10);
        }
        if (mx - mn > diff) res = num, diff = mx - mn;
        else if (mx - mn == diff) res += num;
    }
    return res;
}

function maxDigitRangeStr(nums: number[]) {
    let res = 0;
    for (let i = 0, diff = 0; i < nums.length; i++) {
        const mx = +_.max(`${nums[i]}`)!, mn = +_.min(`${nums[i]}`)!;
        if (mx - mn > diff) res = nums[i], diff = Math.max(diff, mx - mn);
        else if (mx - mn == diff) res += nums[i];
    }
    return res;
}
