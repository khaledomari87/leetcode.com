// https://leetcode.com/problems/minimum-pair-removal-to-sort-array-i/solutions/7407052/simulation-on2/

function minimumPairRemoval(nums: number[]) {
    const isSorted = () => {
        for (let i = 1, n = nums.length; i < n; i++) {
            if (nums[i - 1] > nums[i]) return false;
        }
        return true;
    };
    let res = 0;
    for (; !isSorted(); res++) {
        let index = 0, prev = nums[0] + nums[1];
        for (let i = 2, n = nums.length; i < n; i++) {
            const newSum = nums[i - 1] + nums[i];
            if (newSum < prev) {
                index = i - 1, prev = newSum;
            }
        }
        nums.splice(index, 2, nums[index] + nums[index + 1]);
    }
    return res;
}
