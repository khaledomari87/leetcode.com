// https://leetcode.com/problems/count-covered-buildings/solutions/7406343/prefix-minmax/

function countCoveredBuildings(n: number, buildings: [number, number][]) {
    const { min, max } = Math;
    const mpx: Map<number, [number, number]> = new Map(); // [pre, post]
    const mpy: typeof mpx = new Map();
    for (const [x, y] of buildings) {
        ([[x, y, mpx], [y, x, mpy]] as [number, number, typeof mpx][])
            .forEach(([i, j, mp]) => {
                const old = mp.get(i);
                if (old === undefined) mp.set(i, [j, j]);
                else mp.set(i, [min(old[0], j), max(old[1], j)]);
            });
    }
    let res = 0;
    for (const [x, y] of buildings) {
        const [preX, postX] = mpx.get(x)!, [preY, postY] = mpy.get(y)!;
        res += +(preX < y && y < postX && preY < x && x < postY);
    }
    return res;
}
