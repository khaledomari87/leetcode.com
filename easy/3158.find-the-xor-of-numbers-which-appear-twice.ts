// https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/7104289/two-lines/

function duplicateNumbersXOR(nums: number[]) {
    const m = new Array<boolean>(51);
    return nums.reduce((r, n) => (m[n] ? r ^= n : m[n] = true, r), 0);
}
