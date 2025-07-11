// https://leetcode.com/problems/reformat-the-string/solutions/6945965/optimized-time-or-space/

function reformat(s: string) {
    const sum = (nums: number[]) => nums.reduce((a, b) => a + b);
    const a = 'a'.charCodeAt(0), z = '0'.charCodeAt(0);
    const alphas = new Array<number>(26).fill(0);
    const nums = new Array<number>(10).fill(0);
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        c < a ? nums[c - z]++ : alphas[c - a]++;
    }
    const [alphaSum, numSum] = [sum(alphas), sum(nums)];
    if (Math.abs(alphaSum - numSum) > 1) return '';
    const [low, high] = alphaSum < numSum ? [alphas, nums] : [nums, alphas];
    return Array.from({ length: s.length }, (_, i) => {
        const arr = i % 2 ? low : high;
        const code = arr.findIndex((v) => v > 0);
        arr[code]--;
        return String.fromCharCode(code + (arr.length < 26 ? z : a));
    }).join('');
}

function reformat2(s: string) {
    const n = s.length, alphas: string[] = [], nums: string[] = [];
    for (const char of s) {
        (char < 'a' ? nums : alphas).push(char);
    }
    if (Math.abs(alphas.length - nums.length) > 1) return '';
    const [low, high] = alphas.length < nums.length ? [alphas, nums] : [nums, alphas];
    return Array.from({ length: n }, (_, i) => (i % 2 ? low : high).pop()).join('');
}
