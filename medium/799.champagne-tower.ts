// https://leetcode.com/problems/champagne-tower/solutions/7578148/simulation-optimized-space/

function champagneTower(poured: number, row: number, glass: number) {
    const res = [[poured]];
    for (let i = 0; res[i][res[i].length >> 1] > 1 && i < row; i++) {
        res.push(new Array(res[i].length + 1).fill(0));
        for (let j = 0; j < res[i].length; j++) {
            if (res[i][j] > 1) {
                res[i + 1][j] += (res[i][j] - 1) / 2;
                res[i + 1][j + 1] += (res[i][j] - 1) / 2;
                res[i][j] = 1;
            }
        }
    }
    return Math.min(1, res[row]?.[glass] || 0);
}

function champagneTower2(poured: number, row: number, glass: number) {
    let res = [poured];
    for (let i = 0; i < row; i++) {
        const prev = res;
        res = new Array(res.length + 1).fill(0);
        for (let j = 0; j < prev.length; j++) {
            if (prev[j] > 1) {
                res[j] += (prev[j] - 1) / 2;
                res[j + 1] += (prev[j] - 1) / 2;
            }
        }
    }
    return Math.min(1, res?.[glass] || 0);
}
