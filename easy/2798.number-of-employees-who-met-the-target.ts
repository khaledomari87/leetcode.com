// https://leetcode.com/problems/number-of-employees-who-met-the-target/

const numberOfEmployeesWhoMetTarget = (hrs: number[], t: number): number =>
    hrs.reduce((prev, curr) => prev + (curr >= t ? 1 : 0), 0);
