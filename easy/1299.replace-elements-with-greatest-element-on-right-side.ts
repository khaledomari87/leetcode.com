// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/6842685/constant-space/

function replaceElements2(arr: number[]) {
    const res = new Array<number>(arr.length);
    for (let i = arr.length - 1, max = -1; i >= 0; i--) {
        res[i] = max, max = Math.max(max, arr[i]);
    }
    return res;
}
