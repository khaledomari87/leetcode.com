// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/6950802/one-line/

const busyStudent = (starts: number[], ends: number[], query: number) =>
    starts.reduce((r, s, i) => r + +(s <= query && query <= ends[i]), 0);
