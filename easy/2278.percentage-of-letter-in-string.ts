// https://leetcode.com/problems/percentage-of-letter-in-string/solutions/7190186/optimal-solution/

function percentageLetter(s: string, letter: string) {
    let count = 0;
    for (const c of s) count += +(c === letter);
    return Math.floor(100 * count / s.length);
}
