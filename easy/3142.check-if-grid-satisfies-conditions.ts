// https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/7652999/simulation/

const satisfiesConditions = (grid: number[][]) =>
    !grid.some((row, i, g) =>
        row.some((v, j) =>
            i < g.length - 1 && v !== g[i + 1][j] ||
            j < row.length - 1 && v === g[i][j + 1]
        )
    );
