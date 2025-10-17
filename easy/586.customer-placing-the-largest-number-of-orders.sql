-- https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/solutions/6140355/simplest-solution-group-by-order-by-count-desc/

-- PostgreSQL and MySQL
SELECT customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC
LIMIT 1

-- Microsoft SQL
SELECT TOP 1 customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(*) DESC;

-- Oracle
SELECT customer_number
FROM (
    SELECT customer_number, COUNT(order_number) AS order_count
    FROM Orders
    GROUP BY customer_number
    ORDER BY COUNT(*) DESC
) WHERE ROWNUM = 1;