// https://leetcode.com/problems/consecutive-characters/solutions/6949505/two-pointers/

function maxPower(s: string) {
    let res = 1, l = 0, r = 1;
    for (const n = s.length; r < n; r++) {
        if (s[l] !== s[r]) {
            res = Math.max(res, r - l);
            l = r;
        }
    }
    return Math.max(res, r - l);
}
