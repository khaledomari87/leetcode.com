// https://leetcode.com/problems/third-maximum-number/solutions/6290946/linear-solution-using-an-ordered-set/

function thirdMax(nums: number[]): number {
    let seen = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        if (seen.size > 3) {
            const arr = Array.from(seen).sort((a, b) => b - a);
            arr.pop();
            seen = new Set(arr);
        }
        seen.add(nums[i]);
    }
    const res = Array.from(seen).sort((a, b) => b - a);
    return res.length > 2 ? res[2] : res[0];
}
