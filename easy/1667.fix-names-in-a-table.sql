-- https://leetcode.com/problems/fix-names-in-a-table/solutions/7118142/sql-queries-for-all-servers/

--MySQL
SELECT
    user_id,
    CONCAT(UPPER(SUBSTRING(name, 1, 1)), LOWER(SUBSTRING(name, 2))) AS name
FROM Users
ORDER by user_id;

-- PostgreSQL
SELECT
    user_id,
    UPPER(LEFT(name, 1)) || LOWER(SUBSTRING(name FROM 2)) AS name
FROM Users
ORDER by user_id;

--MSSQL
SELECT
    user_id,
    UPPER(LEFT(name, 1)) + LOWER(SUBSTRING(name, 2, LEN(name))) AS name
FROM Users
ORDER by user_id;

--OracleSQL
SELECT
    user_id,
    UPPER(SUBSTR(name, 1, 1)) || LOWER(SUBSTR(name, 2)) AS name
FROM Users
ORDER by user_id;
