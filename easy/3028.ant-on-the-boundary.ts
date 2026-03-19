// https://leetcode.com/problems/ant-on-the-boundary/solutions/7666856/constant-space/

function returnToBoundaryCount(nums: number[]) {
    let res = 0, x = 0;
    for (const v of nums) res += +!(x += v);
    return res;
}
