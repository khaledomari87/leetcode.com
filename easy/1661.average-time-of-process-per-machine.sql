-- https://leetcode.com/problems/average-time-of-process-per-machine/solutions/8163388/universal-query-for-all-servers/

-- MySQL | Oracle | MSSQL
SELECT
    machine_id,
    ROUND(2 * AVG(timestamp * CASE WHEN activity_type =
        'end' THEN 1 ELSE -1 END), 3) AS processing_time
FROM Activity
GROUP BY machine_id;

-- PostgreSQL
SELECT
    machine_id,
    ROUND(2 * AVG(timestamp * CASE WHEN activity_type =
        'end' THEN 1 ELSE -1 END)::NUMERIC, 3) AS processing_time
FROM Activity
GROUP BY machine_id;
