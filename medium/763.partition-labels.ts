// https://leetcode.com/problems/partition-labels/solutions/6594813/clean-greedy-solution/

function partitionLabels(s: string) {
    const res: number[] = [],
        a = 'a'.charCodeAt(0),
        lasts: number[] = new Array(26);
    for (let i = 0; i < s.length; i++) lasts[s.charCodeAt(i) - a] = i;

    for (let i = 0, size = 1, last = 0; i < s.length; i++, size++) {
        if (i === (last = Math.max(last, lasts[s.charCodeAt(i) - a]))) {
            res.push(size), size = 0;
        }
    }
    return res;
}
