// https://leetcode.com/problems/minimum-absolute-distance-between-mirror-pairs/solutions/7954778/without-strings/

function reverse(num: number) {
    let res = 0;
    while (num) res = res * 10 + num % 10, num = Math.floor(num / 10);
    return res;
}
function minMirrorPairDistance(nums: number[]) {
    let res = Infinity;
    for (let i = 0, m = new Map<number, number>(); i < nums.length; i++) {
        if (m.has(nums[i])) res = Math.min(res, i - m.get(nums[i])!);
        m.set(reverse(nums[i]), i);
    }
    return isFinite(res) ? res : -1;
}
