// https://leetcode.com/problems/product-sales-analysis-i/solutions/6798512/join/

SELECT product_name, year, price
FROM Sales s
JOIN Product p ON s.product_id = p.product_id;
