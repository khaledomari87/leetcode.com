// https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/6472977/brute-foce-and-dynamic-programming/

// O(n * n * M) where M = log(MAX(arr[number]))
function lenLongestFibSubseqBruteForce(arr: number[]) {
    const set = new Set(arr);
    return arr.reduce((res, num, i) => {
        for (let j = i + 1; j < arr.length; j++) {
            let prev2 = num, prev = arr[j], len = 2, toFind: number;
            while (set.has(toFind = prev2 + prev)) {
                ++len && ([prev2, prev] = [prev, toFind]);
            }
            len > 2 && (res = Math.max(res, len));
        }
        return res;
    }, 0);
}

// O(n * n)
function lenLongestFibSubseq(arr: number[]) {
    const length = arr.length;
    const dp = Array.from({ length }, () => new Array<number>(length).fill(0));
    let res = 0;
    for (let i = 2; i < length; i++) {
        let l = 0, r = i - 1;
        while (l < r) {
            if (arr[l] + arr[r] > arr[i]) r--;
            else if (arr[l] + arr[r] < arr[i]) l++;
            else res = Math.max(dp[r][i] = dp[l++][r--] + 1, res);
        }
    }
    return res > 0 ? res + 2 : 0;
}
