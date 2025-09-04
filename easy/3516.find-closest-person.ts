// https://leetcode.com/problems/find-closest-person/solutions/7154065/simple/

function findClosest(x: number, y: number, z: number): 0 | 1 | 2 {
    const d = Math.sign(Math.abs(x - z) - Math.abs(y - z));
    return d * d + +(d > 0) as 0 | 1 | 2;
}

function findClosest2(x: number, y: number, z: number): 0 | 1 | 2 {
    const d = Math.abs(x - z) - Math.abs(y - z);
    return d > 0 ? 2 : d < 0 ? 1 : 0;
}
