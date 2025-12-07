-- https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/solutions/7398129/universal-query-all-servers/

-- MySQL | PostgreSQL | Oracle
SELECT
    m.employee_id,
    m.name,
    COUNT(e.employee_id) AS reports_count,  -- employees' count by each manager
    ROUND(AVG(e.age)) AS average_age        -- employees' average age

FROM Employees m                            -- managers as "m"
INNER JOIN Employees e                      -- employees as "e"
ON m.employee_id = e.reports_to             -- managers with reporting employees
GROUP BY m.employee_id, m.name              -- group by managers
ORDER BY m.employee_id                      -- order by managers
;

-- MSSQL
SELECT
    m.employee_id,
    m.name,
    COUNT(e.employee_id) AS reports_count,  -- employees' count by each manager
    ROUND(AVG(CAST(e.age AS FLOAT)), 0)
        AS average_age                      -- employees' average age
FROM Employees m                            -- managers as "m"
INNER JOIN Employees e                      -- employees as "e"
ON m.employee_id = e.reports_to             -- managers with reporting employees
GROUP BY m.employee_id, m.name              -- group by managers
ORDER BY m.employee_id                      -- order by managers
;