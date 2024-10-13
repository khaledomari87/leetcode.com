// https://leetcode.com/problems/spiral-matrix/

function spiralOrder(matrix: number[][]): number[] {
    let direction: 'right' | 'down' | 'left' | 'up' = 'right',
        leftBorder = 0,
        topBorder = 0,
        rightBorder = matrix[0].length - 1,
        bottomBorder = matrix.length - 1,
        i = 0,
        j = 0;

    const output = new Array<number>(),
        length = matrix.length * matrix[0].length;
    while (output.length < length) {
        switch(direction) {
            case 'right':
                while (j <= rightBorder) {
                    output.push(matrix[i][j]);
                    j++;
                }
                j--;
                i++;
                direction = 'down';
                topBorder++;
                break;
            case 'down':
                while (i <= bottomBorder) {
                    output.push(matrix[i][j]);
                    i++;
                }
                i--;
                j--;
                direction = 'left';
                rightBorder--;
                break;
            case 'left':
                while (j >= leftBorder) {
                    output.push(matrix[i][j]);
                    j--;
                }
                j++;
                i--;
                direction = 'up';
                bottomBorder--;
                break;
            case 'up':
                while (i >= topBorder) {
                    output.push(matrix[i][j]);
                    i--;
                }
                i++;
                j++;
                direction = 'right';
                leftBorder++;
                break;
        }
    }
    return output;
};
