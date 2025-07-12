// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/6949774/simple/

function maxProduct(nums: number[]) {
    let [max1, max2] = nums.slice(0, 2).sort((a, b) => a - b);
    for (let i = 2, n = nums.length; i < n; i++) {
        if (nums[i] >= max2) max1 = max2, max2 = nums[i];
        else if (nums[i] >= max1) max1 = nums[i];
    }
    return --max1 * --max2;
}
