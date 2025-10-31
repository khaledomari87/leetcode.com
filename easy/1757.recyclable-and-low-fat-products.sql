-- https://leetcode.com/problems/recyclable-and-low-fat-products/solutions/7314372/unvirsal-query-for-all-servers/

SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';
