// https://leetcode.com/problems/split-with-minimum-sum/solutions/7379933/sorting-greedy/

const splitNum = (num: number) =>
    String(num).split('').sort().reduce(
        (r, s, i) => (r[i % 2].push(s), r),
        [[], []] as string[][],
    ).reduce((sum, a) => sum + +a.join(''), 0);
