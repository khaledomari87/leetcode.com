// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/6774151/hash-set/

function repeatedNTimes(nums: number[]) {
    const set = new Set<number>();
    for (const num of nums) {
        if (set.has(num)) return num;
        set.add(num);
    }
    throw new Error('Invalid Input!');
}
