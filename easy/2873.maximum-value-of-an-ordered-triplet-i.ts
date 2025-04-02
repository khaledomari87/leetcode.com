//

function maximumTripletValue(nums: number[], n = nums.length) {
    const leftMax: number[] = new Array(n).fill(0);
    const rightMax: number[] = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], nums[i - 1]);
        rightMax[n - i - 1] = Math.max(rightMax.at(-i)!, nums.at(-i)!);
    }
    let res = 0;
    for (let j = 1; j < n - 1; j++) {
        res = Math.max(res, (leftMax[j] - nums[j]) * rightMax[j]);
    }
    return res;
}

function maximumTripletValue2(nums: number[]) {
    let res = 0, left = 0, diff = 0;
    for (const num of nums) {
        res = Math.max(res, diff * num);
        diff = Math.max(diff, left - num);
        left = Math.max(left, num);
    }
    return res;
}
