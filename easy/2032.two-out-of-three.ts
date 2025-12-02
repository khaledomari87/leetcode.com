// https://leetcode.com/problems/two-out-of-three/solutions/7387865/hash-map/

function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]) {
    const mp = new Map<number, [boolean, boolean, boolean]>();
    [nums1, nums2, nums3].forEach((arr, i) =>
        arr.forEach((n) => {
            if (!mp.has(n)) mp.set(n, [i === 0, i === 1, i === 2]);
            else mp.get(n)![i] = true;
        })
    );
    return [...mp].filter(([_, a]) => +a[0] + +a[1] + +a[2] > 1).map(([k]) => k);
}
