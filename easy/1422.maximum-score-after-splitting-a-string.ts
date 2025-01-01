// https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/6214214/optimum-linear-solution-dynamic-programming/

function maxScore(s: string): number {
    // Calculate splitting at index 1
    let res = +(s[0] === '0');
    for (let i = 1; i < s.length; i++) {
        res += +s[i]; // increment res if res[i] == '1'
    }

    // Calculate splitting at index 2 and onword
    for (let i = 1, candidate = res; i < s.length - 1; i++) {
        res = Math.max(res, candidate += s[i] === '0' ? 1 : -1);
    }

    return res;
}
