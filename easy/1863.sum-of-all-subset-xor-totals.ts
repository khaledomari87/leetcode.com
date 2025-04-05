function subsetXORSum(nums: number[], n = nums.length) {
    const rbt = (i: number) => {
        if (i < n) {
            backtrack.push(nums[i]);
            res += backtrack.reduce((a, b) => a ^ b);
            rbt(i + 1);
            backtrack.pop();
            rbt(i + 1);
        }
    };
    const backtrack: typeof nums = [];
    let res = 0;
    rbt(0);
    return res;
}

function subsetXORSum2(nums: number[], n = nums.length) {
    const rbt = (i: number, accumXOR: number): number => {
        if (i === n) return accumXOR;
        return rbt(i + 1, accumXOR ^ nums[i]) + rbt(i + 1, accumXOR);
    };
    return rbt(0, 0);
}

const subsetXORSum3 = (nums: number[]) => nums.reduce((a, b) => a | b) << nums.length - 1;
// nums.reduce((a, b) => a | b) * 2 ** (nums.length - 1);
// nums.reduce((a, b) => a | b) * 2 ** nums.length / 2;
