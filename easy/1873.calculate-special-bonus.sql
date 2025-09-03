// https://leetcode.com/problems/calculate-special-bonus/solutions/7151933/sql-queries-for-all-servers/

-- MySQL
SELECT
    employee_id,
    CASE
        WHEN employee_id % 2 > 0 AND name NOT LIKE 'M%' THEN salary
        ELSE 0
    END AS bonus
    -- salary * (employee_id % 2) * (name NOT LIKE 'M%') AS bonus
FROM Employees
ORDER BY employee_id

-- PostgreSQL
SELECT
    employee_id,
    CASE
        WHEN employee_id % 2 > 0 AND name NOT LIKE 'M%' THEN salary
        ELSE 0
    END AS bonus
    -- salary * (employee_id % 2) * (name NOT LIKE 'M%')::INT AS bonus
FROM Employees
ORDER BY employee_id

-- MSQL
SELECT
    employee_id,
    CASE
        WHEN employee_id % 2 > 0 AND name NOT LIKE 'M%' THEN salary
        ELSE 0
    END AS bonus
FROM Employees
ORDER BY employee_id

-- OracleSQL
SELECT
    employee_id,
    CASE
        WHEN MOD(employee_id, 2) > 0 AND name NOT LIKE 'M%' THEN salary
        ELSE 0
    END AS bonus
FROM Employees
ORDER BY employee_id;
