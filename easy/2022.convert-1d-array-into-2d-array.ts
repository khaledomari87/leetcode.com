// https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/8124436/chunking-batching/

import _ from 'lodash';

function construct2DArray(orig: number[], m: number, n: number) {
    if (m * n !== orig.length) return [];
    const res: number[][] = [];
    for (let i = 0; i < m;) {
        res.push(orig.slice(i++ * n, i * n));
    }
    return res;
}

function construct2DArray_(orig: number[], m: number, n: number) {
    return m * n !== orig.length ? [] : _.chunk(orig, n);
}
