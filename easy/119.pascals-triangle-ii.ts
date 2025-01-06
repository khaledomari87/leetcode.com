// https://leetcode.com/problems/pascals-triangle-ii/solutions/6240808/simple-and-efficient/

function getRow(rowIndex: number): number[] {
    let res: number[] = [];
    for (let i = 0; i <= rowIndex; i++) {
        const curr = new Array<number>(i + 1); // initialize array length
        curr[0] = curr[i] = 1; // set left and right elements
        for (let p = 1; p < (i + 1) / 2; p++) {
            curr[p] = res[p] + res[p - 1]; // setting left
            curr[i - p] = curr[p]; // setting right (same value)
        }
        res = curr;
    }
    return res;
}
