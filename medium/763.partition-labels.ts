// https://leetcode.com/problems/partition-labels/solutions/6594813/greedy/

function partitionLabels(s: string) {
    const res: number[] = [],
        a = 'a'.charCodeAt(0),
        code = (i: number) => s.charCodeAt(i) - a,
        lasts: number[] = new Array(26);
    for (let i = 0; i < s.length; i++) lasts[code(i)] = i;

    for (let i = 0, L = 0, R = 0; i < s.length; i++) {
        R = Math.max(R, lasts[code(i)]);
        if (i === R) {
            res.push(R - L + 1);
            L = R + 1;
        }
    }
    return res;
}
