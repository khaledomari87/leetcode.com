// https://leetcode.com/problems/two-sum/solutions/5903072/short-and-efficient-using-map/

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    nums.forEach((value, index) => map.set(value, index));
    // this is slower and consumes more memory:
    // const map = new Map<number, number>(nums.map((value, index) => [value, index]));

    for (let arrIndex = 0; arrIndex < nums.length; arrIndex++) {
        const candidateIndex = map.get(target - nums[arrIndex]);
        if (candidateIndex !== undefined && arrIndex !== candidateIndex) {
            return [arrIndex, candidateIndex];
        }
    }
    return []; // We should never get here
}
