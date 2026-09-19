// https://leetcode.com/problems/count-values-with-equally-spaced-occurrences-i/solutions/8529752/linear-time-space/

function countSpecialIntegers(nums: number[]): number {
    const mp = Map.groupBy(nums.keys(), (i) => nums[i]);
    return [...mp.values()].reduce((cnt, idxs) =>
        cnt + +(idxs.length === 3 &&
            idxs[1] - idxs[0] === idxs[2] - idxs[1]), 0);
}
