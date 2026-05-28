//
// deno-lint-ignore-file prefer-const

function findMiddleIndex(nums: number[]) {
    let t = 0, p = [0, ...nums.map((v) => t += v)];
    return nums.findIndex((v, i) => p[i] == t - p[i + 1]);
}
