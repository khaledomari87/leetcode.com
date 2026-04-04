// https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/7774202/two-approaches-one-line/

// deno-fmt-ignore
const separateDigits = (nums: number[]) =>
    nums.map((v) => `${v}`.split('')).flat().map((v) => +v);

function separateDigitsMath(nums: number[]) {
    const res: number[][] = [], floor = Math.floor;
    for (let v of nums) {
        const arr: number[] = [];
        while (v > 0) {
            arr.push(v % 10);
            v = floor(v / 10);
        }
        res.push(arr.reverse());
    }
    return res.flat();
}
