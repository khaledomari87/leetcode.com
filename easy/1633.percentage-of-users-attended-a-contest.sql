--

-- MySQL / PostgreSQL / Oracle / MSSQL
WITH global_count AS (
    SELECT COUNT(user_id) as counts FROM Users
)
SELECT contest_id,
    ROUND(COUNT(user_id) * 100.0 / AVG(g.counts), 2) AS percentage
FROM Register r
CROSS JOIN global_count g
GROUP BY contest_id
ORDER BY percentage DESC, contest_id
