-- https://leetcode.com/problems/employees-earning-more-than-their-managers/solutions/6266448/simple/

SELECT e.name AS Employee
FROM Employee e
INNER JOIN Employee m
ON e.managerId = m.id
WHERE e.salary > m.salary
