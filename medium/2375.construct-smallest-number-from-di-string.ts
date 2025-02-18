// https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/6436108/sliding-window/

function smallestNumber(pattern: string): string {
    let res: string[] = [];
    for (let i = 0, prev = 0; i <= pattern.length; i++) {
        res.push((i + 1).toString());
        if (i == pattern.length || pattern[i] == 'I') {
            res = res.slice(0, prev).concat(res.slice(prev).reverse());
            prev = i + 1;
        }
    }
    return res.join('');
}
