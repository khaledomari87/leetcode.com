-- https://leetcode.com/problems/primary-department-for-each-employee/solutions/7554957/universal-query-for-all-servers/

SELECT employee_id, department_id
FROM Employee
WHERE primary_flag = 'Y'
UNION -- -------------------------
SELECT employee_id, SUM(department_id) AS department_id
FROM Employee
GROUP BY employee_id
HAVING COUNT(*) = 1
;
