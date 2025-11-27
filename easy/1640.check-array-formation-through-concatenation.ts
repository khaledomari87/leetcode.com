// https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/7377511/linear-and-clean/

function canFormArray(arr: number[], pieces: number[][]) {
    const map: number[][] = new Array(101);
    pieces.forEach((p) => map[p[0]] = p.slice(1));
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]?.every((p, j) => p === arr[i + j + 1])) {
            return false;
        }
        i += map[arr[i]].length;
    }
    return true;
}
