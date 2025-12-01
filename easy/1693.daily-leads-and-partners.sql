-- https://leetcode.com/problems/daily-leads-and-partners/solutions/7385338/universal-query-all-servers/

-- MySQL | PostgreSQL | MSSQL
SELECT
    date_id,
    make_name,
    COUNT(DISTINCT lead_id) AS unique_leads,
    COUNT(DISTINCT partner_id) AS unique_partners
FROM DailySales
GROUP BY date_id, make_name;

-- Oracle
SELECT
    TO_CHAR(date_id, 'YYYY-MM-DD') AS date_id,
    make_name,
    COUNT(DISTINCT lead_id) AS unique_leads,
    COUNT(DISTINCT partner_id) AS unique_partners
FROM DailySales
GROUP BY date_id, make_name;
