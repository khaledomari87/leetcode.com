// https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/7483367/brute-force/

function canMakeSquare(grid: ('B' | 'W')[][]) {
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let b = 0; // black - white
            for (let x = 0; x < 2; x++) {
                for (let y = 0; y < 2; y++) {
                    grid[i + x][j + y] === 'B' ? ++b : --b;
                }
            }
            if (Math.abs(b) > 1) return true; // must be 2 or 4
        }
    }
    return false;
}
