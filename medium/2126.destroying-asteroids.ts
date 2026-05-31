// https://leetcode.com/problems/destroying-asteroids/solutions/8304112/sorting-greedy-one-line/

const asteroidsDestroyed = (m: number, asts: number[]) =>
    asts.sort((a, b) => a - b).every((a) => m >= a && (m += a));
