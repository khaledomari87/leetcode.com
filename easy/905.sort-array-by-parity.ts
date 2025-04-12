// https://leetcode.com/problems/sort-array-by-parity/solutions/6644046/two-approaches/

const sortArrayByParity = (nums: number[]) => {
    for (let l = 0, r = 0; r < nums.length; r++) {
        nums[r] % 2 === 0 && ([nums[l++], nums[r]] = [nums[r], nums[l]]);
    }
    return nums;
};

const sortArrayByParity2 = (nums: number[]) => nums.sort((a, b) => a % 2 - b % 2);
