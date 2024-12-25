// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/6186977/one-line-optimum-solution/

const minimumOperations = (n: number[]): number => n.reduce((s, i) => s + +(i % 3 !== 0), 0);
