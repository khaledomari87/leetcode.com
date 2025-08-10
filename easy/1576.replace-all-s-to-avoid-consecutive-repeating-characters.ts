// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/7065612/clean-ts-js/

function modifyString(s: string) {
    const res = s.split('');
    for (let i = 0, n = res.length; i < n; i++) {
        if (res[i] === '?') {
            const nei: string[] = [];
            if (i < n - 1) nei.push(res[i + 1]);
            if (i > 0) nei.push(res[i - 1]);
            res[i] = !nei.includes('a') ? 'a' : !nei.includes('b') ? 'b' : 'c';
        }
    }
    return res.join('');
}
