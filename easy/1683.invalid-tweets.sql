-- https://leetcode.com/problems/invalid-tweets/solutions/7141165/sql-queries-for-all-servers/

-- Oracle | PostgreSQL | MySQL
SELECT tweet_id
FROM Tweets
WHERE LENGTH(content) > 15;

-- MSSQL
SELECT tweet_id
FROM Tweets
WHERE LEN(content) > 15;
