-- https://leetcode.com/problems/sales-person/solutions/6355935/nested-select/

SELECT name
FROM SalesPerson
WHERE sales_id NOT IN (
    SELECT sales_id
    FROM Orders o 
    INNER JOIN Company c ON c.com_id = o.com_id AND c.name = 'RED'
);
