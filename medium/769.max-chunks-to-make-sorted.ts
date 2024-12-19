// https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/6162269/simplest-solution-on-by-khaled-alomari-siup/

function maxChunksToSorted(arr: number[]): number {
    let output = 0;
    let maxi = -1;
    arr.forEach((val, i) => {
        maxi = Math.max(maxi, val);
        maxi === i && output++;
    });
    return output;
}
