-- https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/7416522/two-approaches-universal-query-all-servers/

-- MySQL | PostgreSQL | Oracle | MSSQL
SELECT e.employee_id
FROM Employees e
LEFT JOIN Employees m
ON e.manager_id = m.employee_id
WHERE
    e.salary < 30000 AND
    m.employee_id IS NULL AND
    e.manager_id IS NOT NULL
ORDER BY e.employee_id;

-- MySQL | PostgreSQL | Oracle | MSSQL
SELECT employee_id
FROM Employees
WHERE
    salary < 30000 AND
    manager_id NOT IN (
        SELECT employee_id FROM employees
    )
ORDER BY employee_id;
