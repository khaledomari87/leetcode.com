// https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/6489025/clean-two-pointers-solution/

function pivotArray(nums: number[], pivot: number) {
    const res = new Array<number>(nums.length);
    let left = 0, right = nums.length - 1;
    for (const num of nums) num < pivot && (res[left++] = num);
    for (let i = right; i >= 0; i--) nums[i] > pivot && (res[right--] = nums[i]);
    while (left <= right) res[left++] = pivot;
    return res;
}
