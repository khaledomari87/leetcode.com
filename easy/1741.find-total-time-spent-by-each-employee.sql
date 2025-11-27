-- https://leetcode.com/problems/find-total-time-spent-by-each-employee/solutions/7377915/universal-query-all-servers/

-- MSSQL | PostgreSQL | MySQL
SELECT
    event_day AS day,
    emp_id,
    SUM(out_time - in_time) AS total_time
FROM Employees
GROUP BY emp_id, event_day;

-- Oracle
SELECT
    TO_CHAR(event_day, 'YYYY-MM-DD') AS day,
    emp_id,
    SUM(out_time - in_time) AS total_time
FROM Employees
GROUP BY emp_id, event_day;
