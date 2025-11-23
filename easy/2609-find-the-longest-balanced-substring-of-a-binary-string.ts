// https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/solutions/7369941/double-counters/

function findTheLongestBalancedSubstring(s: string) {
    const { min, max } = Math;
    let res = 0, cnt0 = 0, cnt1 = 0;
    for (const bin of s) {
        if (bin == '0') {
            if (cnt1 > 0) cnt0 = 1;
            else cnt0++;
            cnt1 = 0;
        } else cnt1++;
        res = max(res, 2 * min(cnt0, cnt1));
    }
    return res;
}
