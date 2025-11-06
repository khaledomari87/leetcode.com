// https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/7330161/simulation/

function resultArray(nums: number[]) {
    const a = [nums[0]], b = [nums[1]];
    for (let i = 2; i < nums.length; i += 2) {
        (a.at(-1)! > b.at(-1)! ? a : b).push(nums[i]);
    }
    return a.concat(b);
}
