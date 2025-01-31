-- https://leetcode.com/problems/classes-more-than-5-students/solutions/6353496/having-count/

SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5
