// https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/6643032/simulation/

const surfaceArea = (grid: number[][]) =>
    grid.reduce((totalArea, row, r) =>
        row.reduce((area, z, c) => {
            if (!z) return area;
            for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                area += Math.max(z - (grid[r + dr]?.[c + dc] || 0), 0);
            }
            return area + 2; // top and bottom
        }, totalArea), 0);
