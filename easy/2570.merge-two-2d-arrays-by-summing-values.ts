// https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/6483823/two-pointers/

function mergeArrays(nums1: [number, number][], nums2: typeof nums1) {
    const res: typeof nums1 = [];
    let p1 = 0, p2 = 0;
    while (true) {
        if (p1 === nums1.length) {
            res.push(...nums2.slice(p2));
            break;
        } else if (p2 === nums2.length) {
            res.push(...nums1.slice(p1));
            break;
        } else if (nums1[p1][0] === nums2[p2][0]) {
            res.push([nums1[p1][0], nums1[p1++][1] + nums2[p2++][1]]);
        } else if (nums1[p1][0] < nums2[p2][0]) {
            res.push(nums1[p1++]);
        } else {
            res.push(nums2[p2++]);
        }
    }
    return res;
}
