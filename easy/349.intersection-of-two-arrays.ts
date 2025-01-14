// https://leetcode.com/problems/intersection-of-two-arrays/solutions/6280344/hash-tables/

function intersection(nums1: number[], nums2: number[]): number[] {
    const set = new Set(nums1);
    const res = new Set<number>();
    nums2.forEach((num) => set.has(num) && res.add(num));
    return Array.from(res.values());
}
