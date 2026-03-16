// https://leetcode.com/problems/first-unique-even-element/solutions/7652612/counter-hash-map/

function firstUniqueEven(nums: number[]) {
    const mp = nums.reduce(
        (m, v) => m.set(v, (m.get(v) || 0) + 1),
        new Map<number, number>(),
    );
    return nums.find((v) => !(v % 2) && mp.get(v)! === 1) ?? -1;
}
