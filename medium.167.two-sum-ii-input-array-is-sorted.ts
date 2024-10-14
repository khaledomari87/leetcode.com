// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum(numbers: number[], target: number): number[] {
    let left = 0,
        right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        }
        sum > target ? right-- : left++;
    }
    return [];
};
