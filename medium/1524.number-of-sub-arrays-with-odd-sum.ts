// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/6465371/optimal-solution-prefix-sum-and-counting/

function numOfSubarrays(arr: number[]) {
    let res = 0, odd = 0, even = 1, prefix = 0;
    for (const num of arr) {
        (prefix += num) & 1 ? ++odd && (res += even) : ++even && (res += odd);
        res %= 1_000_000_007;
    }
    return res;
}
