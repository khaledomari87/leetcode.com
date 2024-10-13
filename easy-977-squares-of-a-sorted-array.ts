// https://leetcode.com/problems/squares-of-a-sorted-array/

function sortedSquares(nums: number[]): number[] {
    const output = new Array(nums.length);
    let left = 0,
        right = nums.length - 1,
        index = nums.length;
    while (index-- >= 0) {
        if (Math.abs(nums[right]) > Math.abs(nums[left])) {
            output[index] = Math.pow(nums[right--], 2);
        } else {
            output[index] = Math.pow(nums[left++], 2);
        }
    }
    return output;
};

function sortedSquares2(nums: number[]): number[] {
    const output = new Array();
    let left = 0;
    for (let i = 1; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(nums[left])) {
            left = i;
        }
    }
    let right = left + 1;
    output.push(Math.pow(nums[left--], 2));
    while (right < nums.length || left > -1) {
        let nextValue: undefined | number;
        if (right === nums.length) {
            nextValue = Math.pow(nums[left--], 2);
        } else if (left === -1) {
            nextValue = Math.pow(nums[right++], 2);
        } else {
            const sqrR = Math.pow(nums[right], 2);
            const sqrL = Math.pow(nums[left], 2);
            if (sqrR < sqrL) {
                nextValue = sqrR;
                right++;
            } else {
                nextValue = sqrL;
                left--;
            }
        }
        output.push(nextValue);
    }

    return output;
};