// https://leetcode.com/problems/max-area-of-island/solutions/6034101/dfs/

function maxAreaOfIsland(grid: (1 | 0)[][]): number {
    const dfs = (i: number, j: number): number => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 0) return 0;
        grid[i][j] = 0;
        return 1 + dfs(i + 1, j) + dfs(i, j + 1) + dfs(i - 1, j) + dfs(i, j - 1);
    };
    let output = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            output = Math.max(output, dfs(i, j));
        }
    }
    return output;
}
