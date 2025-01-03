// https://leetcode.com/problems/sort-colors/solutions/6224045/three-pointers-solution/

function sortColors(nums: number[]): void {
    const RED = 0, WHITE = 1, BLUE = 2;
    let left = 0, right = nums.length - 1, middle = 0;
    while (middle <= right) {
        if (nums[middle] === RED) [nums[middle++], nums[left++]] = [nums[left], nums[middle]];
        else if (nums[middle] === WHITE) middle++;
        else if (nums[middle] === BLUE) [nums[middle], nums[right--]] = [nums[right], nums[middle]];
        else throw new Error('Invalid input!');
    }
}
