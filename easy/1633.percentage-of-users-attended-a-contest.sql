-- https://leetcode.com/problems/percentage-of-users-attended-a-contest/solutions/7282704/universal-query-for-all-servers/

-- MySQL / PostgreSQL / Oracle / MSSQL
WITH total AS (SELECT COUNT(user_id) as counts FROM Users)
SELECT contest_id,
    ROUND(COUNT(user_id) * 100.0 / counts, 2) AS percentage
FROM Register
CROSS JOIN total
GROUP BY contest_id, counts
ORDER BY percentage DESC, contest_id;
