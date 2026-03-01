// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/7616147/one-line/

const minPartitions = (n: string) => n.split('').reduce((r, d) => Math.max(r, +d), 0);
