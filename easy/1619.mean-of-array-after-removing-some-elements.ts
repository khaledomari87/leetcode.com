// https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/7280483/simplest/

function trimMean(arr: number[]) {
    const trimmed = arr.sort((a, b) => a - b)
        .slice(arr.length / 20, -arr.length / 20);
    return trimmed.reduce((a, b) => a + b) / trimmed.length;
}
