// https://leetcode.com/problems/duplicate-zeros/solutions/6804561/simple-5-lines/

function duplicateZeros(arr: number[]) {
    const n = arr.length, res: number[] = new Array(n);
    for (let i = 0, j = 0; j < n; i++, j++) {
        res[j] = arr[i];
        if (!arr[i] && j < n - 1) res[++j] = 0;
    }
    res.forEach((num, i) => arr[i] = num);
}
