// https://leetcode.com/problems/available-captures-for-rook/solutions/6780360/simulation/

function numRookCaptures(board: ('.' | 'R' | 'p' | 'B')[][]) {
    const R: [number, number] = [-1, -1];
    outer: for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === 'R') {
                R[0] = i, R[1] = j;
                break outer;
            }
        }
    }
    return [[1, 0], [-1, 0], [0, 1], [0, -1]].reduce((res, dir) => {
        let [x, y] = R.map((val, i) => val + dir[i]);
        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            if (board[x][y] !== '.') {
                res += +(board[x][y] === 'p');
                break;
            }
            x += dir[0], y += dir[1];
        }
        return res;
    }, 0);
}
