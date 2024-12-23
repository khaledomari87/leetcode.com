// https://leetcode.com/problems/merge-sorted-array/solutions/6176603/optimum-solution/?envType=problem-list-v2&envId=xbqoi1eh

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    while (n > 0) {
        nums1[n + m - 1] = m >= 0 && nums1[m - 1] > nums2[n - 1] ? nums1[--m] : nums2[--n];
    }
}
