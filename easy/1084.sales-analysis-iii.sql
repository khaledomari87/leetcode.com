-- https://leetcode.com/problems/sales-analysis-iii/solutions/6804504/having-min-max-sale-date/

SELECT DISTINCT p.product_id, p.product_name
FROM Sales s
JOIN Product p ON p.product_id = s.product_id
GROUP BY p.product_id, p.product_name
HAVING MIN(sale_date) >= '2019-01-01' AND MAX(sale_date) <= '2019-03-31';
