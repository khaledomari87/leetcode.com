// https://leetcode.com/problems/contains-duplicate/solutions/5900812/simple-efficient-and-readable/

function containsDuplicate(nums: number[]): boolean {
    // return new Set(nums).size !== nums.length; // Below solution is more efficient
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}
