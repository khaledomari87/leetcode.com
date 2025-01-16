// https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/6287901/two-approaches-hash-map-constant-space/

function xorAllNums(nums1: number[], nums2: number[]): number {
    const counts = nums1.reduce(
        (map, num) => map.set(num, (map.get(num) || 0) + nums2.length),
        new Map<number, number>(),
    );
    nums2.forEach((num) => counts.set(num, (counts.get(num) || 0) + nums1.length));
    return Array.from(counts).reduce((res, ent) => (ent[1] % 2) ? (res ^ ent[0]) : res, 0);
}

function xorAllNumsOptimized(nums1: number[], nums2: number[]): number {
    let xor1 = 0, xor2 = 0;
    if (nums1.length % 2) { for (const num of nums2) xor2 ^= num; }
    if (nums2.length % 2) { for (const num of nums1) xor1 ^= num; }
    return xor1 ^ xor2;
}
