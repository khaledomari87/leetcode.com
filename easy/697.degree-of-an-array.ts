// https://leetcode.com/problems/degree-of-an-array/solutions/6429965/three-hash-maps/

function findShortestSubArray(nums: number[]): number {
    let deg = 0;
    const counts = new Map<number, number>();
    const firstIdx = new Map<number, number>();
    const lastIdx = new Map<number, number>();
    nums.forEach((num, index) => {
        !firstIdx.has(num) && firstIdx.set(num, index);
        lastIdx.set(num, index);
        const count = (counts.get(num) || 0) + 1;
        counts.set(num, count);
        deg = Math.max(deg, count);
    });
    let res = nums.length;
    counts.forEach((count, num) =>
        count === deg && (res = Math.min(res, lastIdx.get(num)! - firstIdx.get(num)! + 1))
    );
    return res;
}
