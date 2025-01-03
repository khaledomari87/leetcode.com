// https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/6226416/using-a-hash-table/

function intersect(nums1: number[], nums2: number[]): number[] {
    const map = nums1.reduce((map, num) => map.set(num, (map.get(num) || 0) + 1), new Map<number, number>());
    const res: number[] = [];
    nums2.forEach((num) => {
        const item = map.get(num);
        if (item) {
            map.set(num, item - 1);
            res.push(num);
        }
    });
    return res;
}
