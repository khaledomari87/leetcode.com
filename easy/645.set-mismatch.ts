// https://leetcode.com/problems/set-mismatch/solutions/6364575/hash-map/

function findErrorNums(nums: number[]): number[] {
    const map = nums.reduce((res, num) => res.set(num, (res.get(num) || 0) + 1), new Map<number, number>());
    const res = new Array<number>();
    for (let i = 1; i <= nums.length; i++) {
        const count = map.get(i);
        !count && res.push(i) || count! > 1 && res.unshift(i);
        if (res.length === 2) break;
    }
    return res;
}
