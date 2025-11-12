-- https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/solutions/7341153/universal-query-for-all-servers/

SELECT teacher_id, COUNT(DISTINCT subject_id) AS cnt
FROM Teacher
GROUP BY teacher_id;
