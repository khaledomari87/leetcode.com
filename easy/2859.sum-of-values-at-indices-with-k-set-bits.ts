// https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/7681642/simulation/

const sumIndicesWithKSetBits = (nums: number[], k: number) =>
    nums.map((v, i) => [v, i])
        .filter(([, i]) =>
            i.toString(2)
                .split('')
                .reduce((a, b) => a + +b, 0) === k
        ).reduce((a, [v]) => a + v, 0);
