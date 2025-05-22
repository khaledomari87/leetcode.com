// https://leetcode.com/problems/valid-mountain-array/solutions/6696333/simulation/

function validMountainArray(arr: number[]) {
    if (arr.length < 3) return false;
    let pivot = -1;
    for (let i = 1, n = arr.length; i < n; i++) {
        if (arr[i] === arr[i - 1]) return false;
        if (arr[i] < arr[i - 1]) {
            pivot = i;
            break;
        }
    }
    if (Math.abs(pivot) === 1) return false;
    for (let i = pivot, n = arr.length - 1; i < n; i++) {
        if (arr[i] <= arr[i + 1]) return false;
    }
    return true;
}
