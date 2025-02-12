// https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/6411649/optimal-solution/

function maximumSum(nums: number[]) {
    const groups = new Array<number>(82);
    return nums.reduce((res, num) => {
        let sum = 0, tmp = num;
        while (tmp > 0) {
            sum += tmp % 10;
            tmp = Math.floor(tmp / 10);
        }
        if (groups[sum] === undefined) groups[sum] = num;
        else {
            res = Math.max(res, groups[sum] + num);
            groups[sum] = Math.max(groups[sum], num);
        }
        return res;
    }, -1);
}
