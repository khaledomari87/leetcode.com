-- https://leetcode.com/problems/project-employees-i/solutions/6799323/sql/

SELECT project_id, ROUND(AVG(experience_years), 2) AS average_years
FROM Employee e
JOIN Project p ON p.employee_id = e.employee_id
GROUP BY project_id
