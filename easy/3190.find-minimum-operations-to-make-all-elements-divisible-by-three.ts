// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/6186977/one-line-optimum-solution/

const minimumOperations = (n: number[]) => n.reduce((s, v) => s + +(v % 3 > 0), 0);
