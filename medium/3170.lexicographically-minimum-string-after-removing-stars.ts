// https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/6819824/greedy-clean-ts-js/

function clearStars(s: string) {
    const cnt: number[][] = Array.from({ length: 26 }, () => []);
    const res = s.split(''), a = 'a'.charCodeAt(0);
    res.forEach((char, i) => {
        if (char !== '*') cnt[s.charCodeAt(i) - a].push(i);
        else {
            const item = cnt.find((j) => j.length)!.pop();
            if (item !== undefined) res[item] = '*';
        }
    });
    return res.filter((c) => c !== '*').join('');
}
