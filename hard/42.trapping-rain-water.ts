// https://leetcode.com/problems/trapping-rain-water/solutions/5911544/simple-and-efficient/

function trap(height: number[]): number {
    const length = height.length;
    const maxLeftBarArr = new Array(length);
    const maxRightBarArr = new Array(length);
    let leftBar = 0;
    let rightBar = 0;
    for (let left = 0; left < length; left++) {
        const right = length - left - 1;
        leftBar = Math.max(leftBar, height[left]);
        rightBar = Math.max(rightBar, height[right]);
        maxLeftBarArr[left] = leftBar;
        maxRightBarArr[right] = rightBar;
    }
    let output = 0;
    for (let i = 0; i < length; i++) {
        const value = Math.min(maxLeftBarArr[i], maxRightBarArr[i]) - height[i];
        value > 0 && (output += value);
    }
    return output;
}
