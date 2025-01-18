// https://leetcode.com/problems/license-key-formatting/solutions/6297708/stack/

function licenseKeyFormatting(s: string, k: number) {
    const res: string[] = [];
    let i = s.length - 1;
    while (i >= 0) {
        const item: string[] = [];
        while (item.length < k && i >= 0) {
            if (s[i] !== '-') {
                item.push(s[i].toUpperCase());
            }
            i--;
        }
        item.length && res.push(item.reverse().join(''));
    }
    return res.reverse().join('-');
}
