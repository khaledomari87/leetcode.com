// https://leetcode.com/problems/count-digit-appearances/solutions/8389706/two-approaches-math-string/

const countDigitOccurrences = (nums: number[], digit: number) =>
    nums.reduce((res, v) => {
        for (; v; v = Math.floor(v / 10)) res += +(v % 10 === digit);
        return res;
    }, 0);

const countDigitOccurrencesStr = (nums: number[], digit: number) =>
    nums.reduce((res, v) => {
        for (const d of `${v}`) res += +(+d % 10 === digit);
        return res;
    }, 0);
