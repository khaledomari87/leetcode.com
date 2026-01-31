// https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/7540734/math/

const { min, max } = Math;
function minNumber(nums1: number[], nums2: number[]) {
    const s1 = new Set(nums1), s2 = new Set(nums2);
    let m1 = Infinity, m2 = Infinity;
    for (let i = 1; i < 10; i++) {
        if (s1.has(i)) {
            if (s2.has(i)) return i;
            m1 = min(m1, i);
        }
        if (s2.has(i)) m2 = min(m2, i);
    }
    return min(m1, m2) * 10 + max(m1, m2);
}
