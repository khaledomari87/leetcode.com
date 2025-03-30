// https://leetcode.com/problems/transpose-matrix/solutions/6597576/one-liner/

const transpose = (matrix: number[][]) => matrix[0].map((_, i) => matrix.map((row) => row[i]));
