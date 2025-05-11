// https://leetcode.com/problems/three-consecutive-odds/solutions/

function threeConsecutiveOdds(arr: number[]) {
    for (let i = 0, cnt = 0, n = arr.length; i < n; i++) {
        if (arr[i] & 1) {
            if (++cnt === 3) return true;
        } else cnt = 0;
    }
    return false;
}
