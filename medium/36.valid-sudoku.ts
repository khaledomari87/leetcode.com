// https://leetcode.com/problems/valid-sudoku/solutions/5904076/math-formulas/

const isValid = (arr: string[]) => {
    const seen = new Set<string>();
    for (const char of arr) {
        if (char !== '.') {
            if (seen.has(char)) return false;
            seen.add(char);
        }
    }
    return true;
};

function isValidSudoku(board: string[][]) {
    const length = 9, boxLength = 3, floor = Math.floor;
    const cols: string[][] = Array.from({ length }, () => new Array(length));
    const boxes: string[][] = Array.from({ length }, () => new Array(length));
    for (let i = 0; i < length; i++) {
        if (!isValid(board[i])) return false;
        for (let j = 0; j < length; j++) {
            cols[j][i] = board[i][j];
            const boxIndex = boxLength * floor(i / boxLength) + floor(j / boxLength);
            const eleIndex = boxLength * (i % boxLength) + j % boxLength;
            boxes[boxIndex][eleIndex] = board[i][j];
        }
    }
    return !cols.some((v) => !isValid(v)) && !boxes.some((v) => !isValid(v));
}
