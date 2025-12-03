// https://leetcode.com/problems/min-max-game/solutions/7390034/elegant-swapping/

function minMaxGame(nums: number[]) {
    for (const fn = [Math.min, Math.max]; nums.length > 1;) {
        const tmp: typeof nums = [];
        for (let i = 0, n = nums.length; i < n; i += 2) {
            tmp.push(fn[+(i % 4 > 1)](nums[i], nums[i + 1]));
        }
        nums = tmp;
    }
    return nums[0];
}
