-- https://leetcode.com/problems/find-users-with-valid-e-mails/solutions/7013238/universal-query/

-- PostgreSQL
SELECT *
FROM Users
WHERE mail ~ '^[a-zA-Z][a-zA-Z0-9\.\-_]*@leetcode\.com$';

-- MySQL
SELECT *
FROM Users
WHERE REGEXP_LIKE(mail, '^[a-zA-Z][a-zA-Z0-9._-]*@leetcode\\.com$', 'c');

-- Oracle
SELECT *
FROM Users
WHERE REGEXP_LIKE(mail, '^[a-zA-Z][a-zA-Z0-9._-]*@leetcode\.com$');
