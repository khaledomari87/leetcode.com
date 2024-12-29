-- https://leetcode.com/problems/delete-duplicate-emails/solutions/6200168/simplest-postgressql-query/

DELETE
FROM Person p1
USING Person p2
WHERE p1.email = p2.email AND p1.id > p2.id;
