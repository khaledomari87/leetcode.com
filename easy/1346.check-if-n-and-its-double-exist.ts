// https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6889402/set/

function checkIfExist(arr: number[]) {
    const set = new Set<number>();
    return arr.some((v) => {
        if (set.has(v / 2) || set.has(v * 2)) {
            return true;
        }
        return set.add(v), false;
    });
}
