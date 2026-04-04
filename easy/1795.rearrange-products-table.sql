-- https://leetcode.com/problems/rearrange-products-table/solutions/7777101/universal-query-for-all-servers/

-- MySQL | PostgreSQL | Oracle | MSSQL
SELECT product_id, 'store1' AS store, store1 AS price
FROM Products
WHERE store1 IS NOT NULL

UNION ALL

SELECT product_id, 'store2' AS store, store2 AS price
FROM Products
WHERE store2 IS NOT NULL

UNION ALL

SELECT product_id, 'store3' AS store, store3 AS price
FROM Products
WHERE store3 IS NOT NULL
;

------

-- MySQL 
SELECT product_id, store, price
FROM Products
JOIN (
    SELECT 'store1' AS store UNION ALL
    SELECT 'store2' UNION ALL
    SELECT 'store3'
) s
ON TRUE
CROSS JOIN LATERAL (
    SELECT CASE s.store
        WHEN 'store1' THEN store1
        WHEN 'store2' THEN store2
        WHEN 'store3' THEN store3
    END AS price
) v
WHERE price IS NOT NULL;

-- PostgreSQL 
SELECT product_id, store, price
FROM Products,
LATERAL (
    VALUES
        ('store1', store1),
        ('store2', store2),
        ('store3', store3)
) AS v(store, price)
WHERE price IS NOT NULL;

-- Oracle 
SELECT product_id, store, price
FROM Products
UNPIVOT (
    price FOR store IN (
        store1 AS 'store1',
        store2 AS 'store2',
        store3 AS 'store3'
    )
)
WHERE price IS NOT NULL;

-- MSSQL 
SELECT product_id, store, price
FROM Products
UNPIVOT (
    price FOR store IN (store1, store2, store3)
) AS unpvt
WHERE price IS NOT NULL;

