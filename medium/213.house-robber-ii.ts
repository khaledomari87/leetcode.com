// https://leetcode.com/problems/house-robber-ii/solutions/6246059/constant-space-dynamic-programming/

const rob = (nums: number[]): number => {
    if (nums.length <= 3) return Math.max(...nums);
    const backtrack = (i: number): number => {
        if (i >= cache.length) return 0;
        if (cache[i] !== undefined) return cache[i];
        cache[i] = nums[i] + Math.max(backtrack(i + 2), backtrack(i + 3));
        return cache[i];
    };
    let cache = new Array<number>(nums.length - 1);
    const res1 = Math.max(backtrack(0), backtrack(1));
    cache = new Array<number>(nums.length);
    const res2 = Math.max(backtrack(1), backtrack(2));
    return Math.max(res1, res2);
};

const robDP = (nums: number[]) => {
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
