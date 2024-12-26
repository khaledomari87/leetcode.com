// https://leetcode.com/problems/find-missing-and-repeated-values/solutions/6190671/linear-solution/

function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const counter = grid.reduce((arr, row) => {
        row.forEach((value) => {
            arr[value - 1] ? arr[value - 1]++ : arr[value - 1] = 1;
        });
        return arr;
    }, new Array<typeof grid[number][number]>(grid.length ** 2));

    const output: number[] = new Array<number>(2);
    for (let i = 0; i < counter.length; i++) {
        if (counter[i] === 2) output[0] = i + 1;
        else if (!counter[i]) output[1] = i + 1;
    }
    return output;
}
