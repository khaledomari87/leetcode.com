// https://leetcode.com/problems/valid-sudoku/

const isValidSudokuSequence = (arr: string[]) => {
    const seen = new Set<string>();
    for (const char of arr) {
        if (char !== '.') {
            if (seen.has(char)) {
                return false;
            }
            seen.add(char);
        }
    }
    return true;
}

function isValidSudoku(board: string[][]): boolean {
    const length = 9;
    const boxLength = 3;
    const cols = new Array<Array<string>>(length);
    const boxes = new Array<Array<string>>(length);
    for (let i = 0; i < length; i++) {
        if (!isValidSudokuSequence(board[i])) {
            return false;
        }
        for (let j = 0; j < length; j++) {
            if (!cols[j]) {
                cols[j] = new Array<string>(length);
            }
            cols[j][i] = board[i][j];

            const boxIndex = boxLength * Math.trunc(i / boxLength) + Math.trunc(j / boxLength);
            const eleIndex = boxLength * (i % boxLength) + j % boxLength;
            if (!boxes[boxIndex]) {
                boxes[boxIndex] = new Array<string>(length);
            }
            boxes[boxIndex][eleIndex] = board[i][j];
        }
    }
    // return !cols.some(v => !isValidSudokuSequence(v)) && !boxes.some(v => !isValidSudokuSequence(v));
    for (let i = 0; i < length; i++) {
        if (!isValidSudokuSequence(cols[i]) || !isValidSudokuSequence(boxes[i])) {
            return false;
        }
    }
    return true;
};
