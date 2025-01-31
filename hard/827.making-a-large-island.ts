// https://leetcode.com/problems/making-a-large-island/solutions/6351423/depth-first-search-dfs-with-size-propagation/

function largestIsland(grid: (0 | 1)[][]) {
    const checkBoundaries = (r: number, c: number) => r >= 0 && c >= 0 && r < grid.length && c < grid.length;
    const calcSize = (r: number, c: number): number => {
        if (!checkBoundaries(r, c) || !grid[r][c] || sizes[r][c]) return 0;
        sizes[r][c] = 1;
        return directions.reduce((acc, o) => acc + calcSize(r + o[0], c + o[1]), 1);
    };
    const setSnID = (r: number, c: number, size: number, id: number): void => {
        if (!checkBoundaries(r, c) || !grid[r][c] || IDs[r][c]) return;
        sizes[r][c] = size, IDs[r][c] = id;
        directions.forEach((o) => setSnID(r + o[0], c + o[1], size, id));
    };
    const sizes: number[][] = new Array(grid.length).fill([]).map(() => new Array(grid.length));
    const IDs: number[][] = new Array(grid.length).fill([]).map(() => new Array(grid.length));
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let id = 0;
    grid.forEach((row, r) => row.forEach((bin, c) => bin && setSnID(r, c, calcSize(r, c), ++id)));

    return grid.reduce((maxRes, row, r) =>
        row.reduce((rowRes, bin, c) => {
            if (bin) return !rowRes ? sizes[r][c] : rowRes;
            else {
                let size = 1;
                const set = new Set<number>();
                directions.forEach((offset) => {
                    const nr = r + offset[0], nc = c + offset[1];
                    if (checkBoundaries(nr, nc) && sizes[nr][nc] && !set.has(IDs[nr][nc])) {
                        size += sizes[nr][nc];
                        set.add(IDs[nr][nc]);
                    }
                });
                return Math.max(rowRes, size);
            }
        }, maxRes), 0);
}
