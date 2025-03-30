// https://leetcode.com/problems/partition-labels/solutions/6594813/clean-greedy-solution/

function partitionLabels(s: string) {
    const res: number[] = [],
        a = 'a'.charCodeAt(0),
        lasts: number[] = new Array(26);
    for (let i = 0; i < s.length; i++) lasts[s.charCodeAt(i) - a] = i;

    for (let i = 0, L = 0, R = 0; i < s.length; i++) {
        if (i === (R = Math.max(R, lasts[s.charCodeAt(i) - a]))) {
            res.push(R - L + 1), L = R + 1;
        }
    }
    return res;
}
