// https://leetcode.com/problems/maximize-expression-of-three-elements/solutions/7398183/linear-solution-one-pass/

function maximizeExpressionOfThree(nums: number[]) {
    let mn = Infinity, mx1 = -Infinity, mx2 = mx1;
    for (const num of nums) {
        if (num < mn) mn = num;
        if (num >= mx2) [mx1, mx2] = [mx2, num];
        else if (num > mx1) mx1 = num;
    }
    return mx1 + mx2 - mn;
}
