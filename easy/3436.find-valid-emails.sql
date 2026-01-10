-- https://leetcode.com/problems/find-valid-emails/solutions/7484304/regexp-all-servers-sql-queries/

-- MySQL
SELECT *
FROM Users
WHERE email REGEXP '^[A-Za-z0-9_]+@[A-Za-z]+\\.com$'
ORDER BY user_id;

-- PostgreSQL
SELECT *
FROM users
WHERE email ~ '^[A-Za-z0-9_]+@[A-Za-z]+\.com$'
ORDER BY user_id;

-- MSSQL
SELECT *
FROM Users
WHERE PATINDEX('%[^A-Za-z0-9_]%', LEFT(email, CHARINDEX('@', email) - 1)) = 0
  AND PATINDEX('%[^A-Za-z]%', 
       SUBSTRING(email, CHARINDEX('@', email) + 1,
       LEN(email) - CHARINDEX('@', email) - 4)) = 0
  AND email LIKE '%@%.com'
ORDER BY user_id;

-- Oracle
SELECT *
FROM users
WHERE REGEXP_LIKE(email, '^[A-Za-z0-9_]+@[A-Za-z]+\.com$')
ORDER BY user_id;
