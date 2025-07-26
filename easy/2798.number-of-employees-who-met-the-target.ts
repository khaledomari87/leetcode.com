// https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/5990258/simplest-and-most-efficient-one-line/

const numberOfEmployeesWhoMetTarget = (hrs: number[], t: number) =>
    hrs.reduce((sum, val) => sum + +(val >= t), 0);
