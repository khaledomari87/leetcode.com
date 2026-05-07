// https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/8163455/linear-solution-constant-time/

function targetIndices(nums: number[], target: number) {
    let lt = 0, eq = 0;
    for (const v of nums) {
        if (v < target) lt++;
        else if (v === target) eq++;
    }
    return Array.from({ length: eq }, (_, i) => lt + i);
}
