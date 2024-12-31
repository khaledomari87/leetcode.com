// https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/6210256/two-solutions/

const encrypt = (s: string) => +s.split('').reduce((p, c) => p > c ? p : c).repeat(s.length);
const sumOfEncryptedInt = (nums: number[]) => nums.reduce((sum, num) => sum + encrypt(num.toString()), 0);

const sumOfEncryptedInt2 = (nums: number[]) => {
    let output = 0;
    for (let num of nums) {
        let multiplier = 0, max = 0;
        while (num > 0) {
            multiplier = multiplier * 10 + 1;
            max = Math.max(max, num % 10);
            num = Math.floor(num / 10);
        }
        output += max * multiplier;
    }
    return output;
};
