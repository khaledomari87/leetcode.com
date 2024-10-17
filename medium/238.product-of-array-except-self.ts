// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
    const output = new Array(nums.length);

    let cumulativeProdct = 1;
    for (let i = 0; i < nums.length; i++) { // Left to right
        output[i] = cumulativeProdct;
        cumulativeProdct *= nums[i];
    }

    cumulativeProdct = 1;
    for (let i = nums.length - 1; i >= 0; i--) { // Right to left
        output[i] *= cumulativeProdct;
        cumulativeProdct *= nums[i];
    }

    return output;
}
