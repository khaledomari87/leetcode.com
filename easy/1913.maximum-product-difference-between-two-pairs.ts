// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/8100513/two-approaches/

function maxProductDifference(nums: number[]) {
    nums.sort((a, b) => a - b);
    return nums.at(-1)! * nums.at(-2)! - nums[0] * nums[1];
}

function maxProductDifference2(nums: number[]) {
    let min1 = Infinity, min2 = min1;
    let max1 = -Infinity, max2 = max1;
    for (const num of nums) {
        if (num < min1) min2 = min1, min1 = num;
        else if (num < min2) min2 = num;
        if (num > max1) max2 = max1, max1 = num;
        else if (num > max2) max2 = num;
    }
    return max1 * max2 - min1 * min2;
}
