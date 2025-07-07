-- https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solutions/6932428/simple-left-join/

SELECT unique_id, name
FROM Employees e
LEFT JOIN EmployeeUNI u ON u.id = e.id
