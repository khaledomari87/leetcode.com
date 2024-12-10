// https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/solutions/6134060/one-line-o-1/

const checkTwoChessboards = (c1: string, c2: string) =>
    (c1.charCodeAt(0) + +c1[1]) % 2 === (c2.charCodeAt(0) + +c2[1]) % 2;
