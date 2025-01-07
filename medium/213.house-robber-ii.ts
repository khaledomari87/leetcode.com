// https://leetcode.com/problems/house-robber-ii/solutions/6246059/constant-space-dynamic-programming/

const rob = (nums: number[]) => {
    if (nums.length <= 3) return Math.max(...nums);
    let res = 0;
    for (let offset = 0; offset < 2; offset++) {
        let prev = 0;
        for (let i = offset, penultimate = 0, end = nums.length - 1 + offset; i < end; i++) {
            [penultimate, prev] = [prev, Math.max(penultimate + nums[i], prev)];
        }
        res = Math.max(res, prev);
    }
    return res;
};
