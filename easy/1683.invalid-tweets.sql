-- https://leetcode.com/problems/invalid-tweets/solutions/7141165/sql-queries-for-all-servers/

-- OracleSQL | PostgreSQL | MySQL
SELECT tweet_id
FROM Tweets
WHERE LENGTH(content) > 15;

-- MS-SQL
SELECT tweet_id
FROM Tweets
WHERE LEN(content) > 15;
