-- https://leetcode.com/problems/find-customer-referee/solutions/6336621/sql/

SELECT name
FROM Customer
WHERE referee_id IS NULL OR referee_id != 2
