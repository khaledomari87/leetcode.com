// https://leetcode.com/problems/special-array-i/solutions/6355482/linear-solution/

function isArraySpecial(nums: number[]) {
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i] & 1) === (nums[i - 1] & 1)) return false;
        // if (!(nums[i] & 1 ^ nums[i - 1] & 1)) return false;
    }
    return true;
}

const isArraySpecialR = (nums: number[]) =>
    nums.reduce((r, e, i) => i === 0 || (r && (e & 1) !== (nums[i - 1] & 1)), true);
