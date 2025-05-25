// https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/6749244/dynamic-programming/

function getWordsInLongestSubsequence(wds: string[], gps: number[]) {
    const check = (s1: string, s2: string) => {
        if (s1.length !== s2.length) return false;
        let oneOff = false;
        for (let i = 0, n = s1.length; i < n; i++) {
            if ((s1[i] !== s2[i])) {
                if (oneOff) return false;
                oneOff = true;
            }
        }
        return oneOff;
    };
    const dp: number[] = new Array(gps.length).fill(1);
    const prev: number[] = new Array(gps.length).fill(-1);
    let maxIndex = 0;
    for (let i = 1, n = gps.length; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (check(wds[i], wds[j]) && dp[j] + 1 > dp[i] && gps[i] !== gps[j]) {
                dp[i] = dp[j] + 1, prev[i] = j;
            }
        }
        if (dp[i] > dp[maxIndex]) maxIndex = i;
    }
    const res: string[] = [];
    for (let i = maxIndex; i >= 0; i = prev[i]) res.push(wds[i]);
    return res.reverse();
}
