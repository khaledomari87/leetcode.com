// https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/6545759/one-line/

const divideArray = (nums: number[]) =>
    !nums.reduce((s, n) => s.delete(n) && s || s.add(n), new Set<number>()).size;

function divideArrayB(nums: number[]) {
    const arr = new Array<boolean>(501);
    nums.forEach((n) => {
        arr[n] = !arr[n];
    });
    return arr.every((v) => !v);
}
