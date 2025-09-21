-- https://leetcode.com/problems/find-products-with-valid-serial-numbers/solutions/7210035/sql-queries-for-all-servers/

-- MySQL
SELECT *
FROM products
WHERE REGEXP_LIKE(description, '\\bSN\\d{4}-\\d{4}\\b', 'c')
ORDER BY product_id;

-- PostgreSQL
SELECT *
FROM products
WHERE description ~ '\mSN\d{4}-\d{4}\M'
ORDER BY product_id;

-- MS-SQL
SELECT *
FROM products
WHERE ' ' + description + ' ' COLLATE Latin1_General_CS_AS
    LIKE '% SN[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9] %'
ORDER BY product_id;


-- OracleSQL
SELECT *
FROM products
WHERE REGEXP_LIKE(description,'((^SN| SN)[0-9]{4}-[0-9]{4}( |$))','c')
ORDER BY product_id;
