// https://leetcode.com/problems/sort-array-by-parity-ii/solutions/6651186/two-pointers/

function sortArrayByParityII(nums: number[]) {
    for (
        let even = 0, odd = 1;
        even < nums.length || odd < nums.length;
        even += 2, odd += 2
    ) {
        if (nums[even] % 2 === 0) odd -= 2;
        else if (nums[odd] % 2 === 1) even -= 2;
        else [nums[even], nums[odd]] = [nums[odd], nums[even]];
    }
    return nums;
}
