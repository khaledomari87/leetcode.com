// https://leetcode.com/problems/find-the-degree-of-each-vertex/solutions/7960677/one-line/

const findDegrees = (matrix: number[][]) => matrix.map((v) => v.reduce((a, b) => a + b));
