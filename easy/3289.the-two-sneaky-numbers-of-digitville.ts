// https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/6201114/hash-set/

function getSneakyNumbers(nums: number[]) {
    const res: number[] = [], seen = new Set<number>();
    for (const num of nums) {
        if (seen.has(num)) {
            res.push(num);
            if (res.length === 2) break;
        } else {
            seen.add(num);
        }
    }
    return res;
}
