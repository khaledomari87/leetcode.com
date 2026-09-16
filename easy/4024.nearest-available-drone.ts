// https://leetcode.com/problems/nearest-available-drone/solutions/8525110/simple-simulation/

function nearestDrone(drones: number[][], target: [number, number]) {
    const n = drones.length, { abs, min } = Math;
    let res = -1, prev = Infinity;
    drones.forEach((d, i) => {
        const dist = abs(d[0] - target[0]) + abs(d[1] - target[1]);
        if (d[2] >= dist && dist < prev) {
            res = i, prev = dist;
        }
    });
    return res;
}
