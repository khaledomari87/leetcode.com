// https://leetcode.com/problems/maximum-ice-cream-bars/solutions/8348602/hash-map-counting-sort/

import _ from 'lodash';

function maxIceCream(costs: number[], coins: number) {
    const mx = _.max(costs)!, mp = _.countBy(costs);
    let res = 0;
    for (let i = _.min(costs)!; i <= mx && coins >= i;) {
        if (mp[i] ?? 0 > 0) coins -= i, mp[i]--, res++;
        else i++;
    }
    return res;
}
