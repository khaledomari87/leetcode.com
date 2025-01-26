-- https://leetcode.com/problems/employee-bonus/solutions/6333265/left-join/

SELECT name, bonus
FROM Employee e
LEFT JOIN Bonus b
ON e.empId = b.empId
WHERE b.bonus IS NULL OR b.bonus < 1000
