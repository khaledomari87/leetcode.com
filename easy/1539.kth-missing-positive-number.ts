// https://leetcode.com/problems/kth-missing-positive-number/solutions/7054490/simple-traversal/

function findKthPositive(arr: number[], k: number) {
    let res = 1;
    for (let i = 0, n = arr.length; k && i < n; res++) {
        arr[i] !== res ? k-- : i++;
    }
    return res + k - 1;
}
