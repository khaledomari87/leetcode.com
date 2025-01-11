-- https://leetcode.com/problems/customers-who-never-order/solutions/6266492/customers-id-not-in-select-distinct-customerid-from-orders/

SELECT DISTINCT email
FROM (
    SELECT 
        email,
        COUNT(*) OVER (PARTITION BY email) AS email_count
    FROM Person
) t
WHERE email_count > 1;
