// https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/6993540/greedy/

// deno-fmt-ignore
function maximumGain(s: string, x: number, y: number) {
    const arr = s.split(''), n = arr.length,
        group: [string, number][] = x > y
            ? [['ab', x], ['ba', y]]
            : [['ba', y], ['ab', x]];
    return group.reduce((res, [tar, pnts]) => {
        let L = 0;
        for (let R = 0; R < n; R++) {
            arr[L++] = arr[R];
            if (L > 1 && arr.slice(L - 2, L).join('') === tar) {
                L -= 2, res += pnts;
            }
        }
        return (arr.splice(L), res);
    }, 0);
}
