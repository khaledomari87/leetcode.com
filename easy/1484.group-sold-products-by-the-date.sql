-- https://leetcode.com/problems/group-sold-products-by-the-date/solutions/6954661/all-compatible-queries/

-- PostgreSQL
SELECT
    sell_date,
    COUNT(DISTINCT product) AS num_sold,
    STRING_AGG(DISTINCT product, ',') AS products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date;

-- MySQL
SELECT
    sell_date,
    COUNT(DISTINCT product) AS num_sold,
    GROUP_CONCAT(DISTINCT product SEPARATOR ',') AS products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date;

-- MSSQL
SELECT
    sell_date,
    COUNT(DISTINCT product) AS num_sold,
    STRING_AGG(product, ',') WITHIN GROUP (ORDER BY product) AS products
FROM (
    SELECT DISTINCT sell_date, product
    FROM Activities
) t
GROUP BY sell_date
ORDER BY sell_date;

-- OracleSQL
SELECT
    TO_CHAR(sell_date, 'YYYY-MM-DD') AS sell_date,
    COUNT(DISTINCT product) AS num_sold,
    LISTAGG(product, ',') WITHIN GROUP (ORDER BY NULL) AS products
FROM (
    SELECT DISTINCT sell_date, product
    FROM Activities
) t
GROUP BY sell_date
ORDER BY sell_date;
