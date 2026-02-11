// https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/7571252/clean-tsjs/

function sortEvenOdd(nums: number[]) {
    const res = [nums, nums].map((a, i) =>
        a.filter((_, j) => !((i + j) % 2)).sort((a, b) => (-i || 1) * (a - b))
    );
    return Array.from({ length: nums.length }, (_, i) => res[i % 2][i >> 1]);
}
