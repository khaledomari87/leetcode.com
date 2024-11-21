// https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/6068683/readable-and-efficient-o-n-m/

function countUnguarded(m: number, n: number, guards: [number, number][], walls: typeof guards): number {
    const grid = new Array<number[]>(m);
    for (let i = 0; i < grid.length; i++) grid[i] = new Array(n);

    // Generally: 1,2,3 means the cell is under guard(s) watch
    const Sr = 1; // secured, row source
    const Sc = 2; // secured, colum source
    const G = 4; // guard
    const W = 8; // wall
    for (const c of guards) grid[c[0]][c[1]] = G;
    for (const c of walls) grid[c[0]][c[1]] = W;

    let guardedCount = 0;
    for (const cell of guards) {
        const row = cell[0];
        const col = cell[1];
        // South
        for (
            let r = row + 1;
            r < m && grid[r][col] !== (grid[r][col] & Sc) && grid[r][col] !== G && grid[r][col] !== W;
            r++
        ) {
            !grid[r][col] && guardedCount++;
            grid[r][col] |= Sc;
        }
        // North
        for (
            let r = row - 1;
            r > -1 && grid[r][col] !== (grid[r][col] & Sc) && grid[r][col] !== G && grid[r][col] !== W;
            r--
        ) {
            !grid[r][col] && guardedCount++;
            grid[r][col] |= Sc;
        }
        // East
        for (
            let c = col + 1;
            c < n && grid[row][c] !== (grid[row][c] & Sr) && grid[row][c] !== G && grid[row][c] !== W;
            c++
        ) {
            !grid[row][c] && guardedCount++;
            grid[row][c] |= Sr;
        }
        // West
        for (
            let c = col - 1;
            c > -1 && grid[row][c] !== (grid[row][c] & Sr) && grid[row][c] !== G && grid[row][c] !== W;
            c--
        ) {
            !grid[row][c] && guardedCount++;
            grid[row][c] |= Sr;
        }
    }
    return m * n - guardedCount - guards.length - walls.length;
}
