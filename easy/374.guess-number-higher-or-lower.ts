// https://leetcode.com/problems/guess-number-higher-or-lower/solutions/6280660/binary-search/

import guess from '../assets/guess.ts';

function guessNumber(R: number): number {
    let L = 1;
    while (L <= R) {
        const mid = Math.floor((L + R) / 2);
        const num = guess(mid);
        if (num === 0) return mid;
        else if (num < 0) R = mid - 1;
        else L = mid + 1;
    }
    return 0;
}
