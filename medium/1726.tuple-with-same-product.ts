// https://leetcode.com/problems/tuple-with-same-product/solutions/6383073/an-o-n-n-optimal-solution/

function tupleSameProduct(nums: number[]) {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const product = nums[i] * nums[j];
            map.set(product, (map.get(product) || 0) + 1);
        }
    }
    let res = 0;
    for (const entity of map) {
        res += entity[1] * (entity[1] - 1) * 4;
    }
    return [...map.values()].reduce((res, c) => res + c * (c - 1) * 4, 0);
}
