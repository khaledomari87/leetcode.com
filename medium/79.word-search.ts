// https://leetcode.com/problems/word-search/solutions/6024143/recursive-backtracking/

function exist(board: string[][], word: string): boolean {
    const wordArr = word.split('');
    const rbt = (i: number, j: number, k: number): boolean => {
        if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || wordArr[k] !== board[i][j]) {
            return false;
        }
        if (++k >= wordArr.length) return true;
        const tmp = board[i][j];
        board[i][j] = '';
        if (rbt(i + 1, j, k) || rbt(i, j + 1, k) || rbt(i - 1, j, k) || rbt(i, j - 1, k)) {
            return true;
        }
        board[i][j] = tmp;
        return false;
    };
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (rbt(i, j, 0)) return true;
        }
    }
    return false;
}
