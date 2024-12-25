// https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/6187005/one-line/

const numberOfChild = (n: number, k: number): number => (k %= n * 2 - 2) && k > n - 1 && 2 * n - 2 - k || k;
