// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/7397499/one-pass-without-strings/

function differenceOfSum(nums: number[]) {
    let eSum = 0, dSum = 0;
    for (let num of nums) {
        eSum += num;
        while (num) {
            dSum += num % 10;
            num = Math.floor(num / 10);
        }
    }
    return Math.abs(eSum - dSum);
}
