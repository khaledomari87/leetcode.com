// https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/6793955/one-line/

const prefixesDivBy5 = (nums: (0 | 1)[], acc = 0) => nums.map((b) => !(acc = ((acc << 1) | b) % 5));
