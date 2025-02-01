// https://leetcode.com/problems/special-array-ii/solutions/6357973/prefix-sum/

function isArraySpecial(nums: number[], queries: [number, number][]) {
    const prefix = new Array<number>(nums.length);
    prefix[0] = 0;
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] + +((nums[i] & 1) === (nums[i - 1] & 1));
    }
    return queries.map((q) => prefix[q[0]] === prefix[q[1]]);
}
