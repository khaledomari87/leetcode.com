// https://leetcode.com/problems/path-crossing/solutions/6964964/clean-ts-js/

function isPathCrossing(path: string) {
    const xy = [0, 0];
    const map = new Map([[xy.toString(), true]]);
    for (const p of path) {
        xy[0] = xy[0] + (p === 'E' ? 1 : p === 'W' ? -1 : 0);
        xy[1] = xy[1] + (p === 'N' ? 1 : p === 'S' ? -1 : 0);
        if (map.has(xy.toString())) return true;
        map.set(xy.toString(), true);
    }
    return false;
}
