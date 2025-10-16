// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/7280445/counting-sort-prefix-sum/

function specialArray(nums: number[]) {
    const min = Math.min, n = nums.length;
    const freq = new Array<number>(n + 1).fill(0);
    for (const num of nums) freq[min(num, n)]++;
    let res = 0;
    for (let i = nums.length; i > 0; i--) {
        res += freq[i];
        if (i === res) return i;
    }
    return -1;
}
