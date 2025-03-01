// https://leetcode.com/problems/number-of-employees-who-met-the-target/

const numberOfEmployeesWhoMetTarget = (hrs: number[], t: number) =>
    hrs.reduce((sum, val) => sum + +(val >= t), 0);
