// https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/6819824/greedy-clean-ts-js/

function clearStars(s: string) {
    const counts: number[][] = Array.from({ length: 26 }, () => []);
    const res = s.split(''), a = 'a'.charCodeAt(0);
    const index = (i: number) => s.charCodeAt(i) - a;
    res.forEach((char, i) =>
        char !== '*' ? counts[index(i)].push(i) : res[counts.find((arr) => arr.length)!.pop()!] = '*'
    );
    return res.filter((c) => c !== '*').join('');
}
