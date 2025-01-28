// https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/6338087/simple-dfs/

function findMaxFish(grid: number[][]) {
    const m = grid.length, n = grid[0].length;
    const offsets: [number, number][] = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const dfs = (r: number, c: number): number => {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] <= 0) return 0;
        const fishes = grid[r][c];
        grid[r][c] = 0;
        return offsets.reduce((acc, o) => acc + dfs(r + o[0], c + o[1]), fishes);
    };
    return Math.max(0, ...grid.map((row, r) => Math.max(...row.map((v, c) => dfs(r, c)))));
}
