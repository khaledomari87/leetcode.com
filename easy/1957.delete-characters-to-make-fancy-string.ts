// https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/6984718/clean/

function makeFancyString(s: string) {
    const res: string[] = [s[0]];
    for (let i = 1, n = s.length, cnt = 1; i < n; i++) {
        if ((s[i] === s[i - 1] ? ++cnt : cnt = 1) < 3) {
            res.push(s[i]);
        }
    }
    return res.join('');
}
