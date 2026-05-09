// https://leetcode.com/problems/count-indices-with-opposite-parity/solutions/8180407/linear-solution-constant-space-suffix-counter/

function countOppositeParity(nums: number[]) {
    const res = new Array<number>(nums.length);
    for (let i = nums.length - 1, odds = 0; i >= 0; i--) {
        if (nums[i] % 2) res[i] = (nums.length - 1 - i) - odds++;
        else res[i] = odds;
    }
    return res;
}
