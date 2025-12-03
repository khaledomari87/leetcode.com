// https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/7389827/clean/

function minimumChairs(s: string) {
    let curr = 0, res = 0;
    for (const e of s) {
        curr += +(e === 'E') - +(e === 'L');
        res = Math.max(res, curr);
    }
    return res;
}
