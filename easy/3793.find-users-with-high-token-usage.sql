-- https://leetcode.com/problems/find-users-with-high-token-usage/solutions/7594105/sql-query-for-all-servers/

-- MySQL | PostgreSQL | Oracle
SELECT
    user_id,
    COUNT(prompt) AS prompt_count,
    ROUND(AVG(tokens), 2) AS avg_tokens
FROM prompts
GROUP BY user_id
HAVING COUNT(prompt) > 2 AND COUNT(DISTINCT tokens) > 1
ORDER BY avg_tokens DESC, user_id ASC;

-- MSSQL
SELECT
    user_id,
    COUNT(prompt) AS prompt_count,
    CAST(ROUND(AVG(CAST(tokens AS DECIMAL(38,4))), 2) AS DECIMAL(18,2)) AS avg_tokens
FROM prompts
GROUP BY user_id
HAVING COUNT(prompt) > 2 AND COUNT(DISTINCT tokens) > 1
ORDER BY avg_tokens DESC, user_id ASC;
