// https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6065175/linear-solution-two-pointers/

function findLengthOfShortestSubarray(arr: number[]): number {
    let R = arr.length - 1;
    while (R > 0 && arr[R - 1] <= arr[R]) R--;
    if (R === 0) return 0;

    let output = R + 1;
    while (R < arr.length && arr[R] < arr[0]) R++;
    output = Math.min(output, R);

    for (let L = 1; arr[L - 1] <= arr[L]; L++) {
        while (R < arr.length && arr[R] < arr[L]) R++;
        output = Math.min(output, R - L);
    }
    return output - 1;
}
