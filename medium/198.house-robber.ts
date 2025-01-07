// https://leetcode.com/problems/house-robber/solutions/6244738/two-ways-recursion-with-cache-dynamic-programming/

const rob = (nums: number[]) => {
    const cache = new Array<number>(nums.length);
    const backtrack = (i: number): number => {
        if (i >= nums.length) return 0;
        if (cache[i] !== undefined) return cache[i];
        // Note: you cannot rob adjacent houses, i.e. you cannot backtrack(i + 1)
        cache[i] = nums[i] + Math.max(backtrack(i + 2), backtrack(i + 3));
        return cache[i];
    };
    return Math.max(backtrack(0), backtrack(1));
};

const robDP = (nums: number[]) =>
    nums.reduce(
        ([penultimate, previous], num) =>
            [penultimate, previous] = [previous, Math.max(penultimate + num, previous)],
        [0, 0], // initialization [penultimate, previous] = [0, 0]
    )[1]; // return previous
