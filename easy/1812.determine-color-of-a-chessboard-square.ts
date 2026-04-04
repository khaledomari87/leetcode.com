// https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/7777356/optimal-solution-one-line/

const squareIsWhite = (c: string) => (c.charCodeAt(0) + +c[1]) % 2 > 0;
