// https://leetcode.com/problems/binary-watch/solutions/6280722/brute-force/

import countOnes from '../assets/countOnes.ts';

function readBinaryWatch(turnedOn: number): string[] {
    const res: string[] = [];
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if (countOnes(h) + countOnes(m) === turnedOn) {
                res.push(`${h}:${m.toString().padStart(2, '0')}`);
            }
        }
    }
    return res;
}
