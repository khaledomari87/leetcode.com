// https://leetcode.com/problems/container-with-most-water/

function maxArea(height: number[]): number {
    let left = 0,
        right = height.length - 1,
        output = 0;
    while (left < right) {
        output = Math.max(
            output,
            Math.min(height[left], height[right]) * (right - left),
        );
        height[left] > height[right] ? right-- : left++;
    }
    return output;
}
