-- https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/solutions/7072883/universal-query/

SELECT customer_id, COUNT(*) AS count_no_trans
FROM Visits v
LEFT JOIN Transactions t ON v.visit_id = t.visit_id
WHERE t.visit_id IS NULL 
GROUP BY customer_id;
