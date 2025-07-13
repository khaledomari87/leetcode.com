// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/6954973/linear-time/

function average(salary: number[]) {
    const min = salary.reduce((a, b) => Math.min(a, b));
    const max = salary.reduce((a, b) => Math.max(a, b));
    const sum = salary.reduce((a, b) => a + b);
    return (sum - min - max) / (salary.length - 2);
}
