// http://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/7100974/hash-map/

function mostFrequent(nums: number[], key: number) {
    const map = new Map<number, number>();
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === key) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
    }
    let res = 0, max = 0;
    for (const [target, count] of map) {
        if (count > max) res = target, max = count;
    }
    return res;
}
