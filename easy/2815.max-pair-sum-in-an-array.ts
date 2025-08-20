// https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/7103755/grouping-by-max-digit/

function maxSum(nums: number[]) {
    const groups: number[][] = Array.from(
        { length: 10 },
        () => new Array(2).fill(-Infinity),
    );
    const { floor, max } = Math;
    for (const num of nums) {
        let maxDigit = -Infinity, remainder = num;
        while (remainder) {
            maxDigit = max(maxDigit, remainder % 10);
            remainder = floor(remainder / 10);
        }
        if (num > groups[maxDigit][0]) {
            groups[maxDigit][1] = groups[maxDigit][0];
            groups[maxDigit][0] = num;
        } else if (num > groups[maxDigit][1]) {
            groups[maxDigit][1] = num;
        }
    }
    return groups.reduce((res, arr) => {
        return max(res, arr[0] + arr[1]);
    }, -1);
}
