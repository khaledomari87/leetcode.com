// https://leetcode.com/problems/merge-intervals/

function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    const output = new Array<number[]>();
    output.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (output[output.length - 1][1] >= intervals[i][0]) {
            output[output.length - 1][1] = Math.max(output[output.length - 1][1], intervals[i][1]);
        } else {
            output.push(intervals[i]);
        }
    }
    return output;
};
