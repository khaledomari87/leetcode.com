// https://leetcode.com/problems/number-of-islands/solutions/6034037/dfs/

function numIslands(grid: ('0' | '1')[][]): number {
    const dfs = (i: number, j: number) => {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] !== '1') return;
        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i, j + 1);
        dfs(i - 1, j);
        dfs(i, j - 1);
    };
    let output = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                output++;
                dfs(i, j);
            }
        }
    }
    return output;
}
