// https://leetcode.com/problems/find-unique-binary-string/solutions/6444903/one-line-linear-solution/

const findDifferentBinaryString = (nums: string[]) =>
    nums.reduce((res, bin, idx) => `${res}${+!+bin[idx]}`, '');
