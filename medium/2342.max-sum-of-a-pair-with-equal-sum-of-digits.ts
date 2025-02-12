// https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/6411649/optimal-solution/

function maximumSum(nums: number[]) {
    const maxes = new Array<number>(82);
    return nums.reduce((res, num) => {
        let sum = 0;
        for (let tmp = num; tmp > 0; tmp = Math.floor(tmp / 10)) sum += tmp % 10;
        if (maxes[sum] === undefined) maxes[sum] = num;
        else {
            res = Math.max(res, maxes[sum] + num);
            maxes[sum] = Math.max(maxes[sum], num);
        }
        return res;
    }, -1);
}
