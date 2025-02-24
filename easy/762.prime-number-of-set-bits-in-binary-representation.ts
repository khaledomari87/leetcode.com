// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/6463685/counting-ones/

import countOnes from '../assets/countOnes.ts';

function countPrimeSetBits(left: number, right: number) {
    const primes = [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1];
    let res = 0;
    while (left <= right) res += primes[countOnes(left++)];
    return res;
}
