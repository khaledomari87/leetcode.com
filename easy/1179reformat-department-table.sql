-- https://leetcode.com/problems/reformat-department-table/solutions/6817827/sql/

-- PostgreSQL
SELECT
    id,
    SUM(revenue) FILTER (WHERE month = 'Jan') AS Jan_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Feb') AS Feb_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Mar') AS Mar_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Apr') AS Apr_Revenue,
    SUM(revenue) FILTER (WHERE month = 'May') AS May_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Jun') AS Jun_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Jul') AS Jul_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Aug') AS Aug_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Sep') AS Sep_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Oct') AS Oct_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Nov') AS Nov_Revenue,
    SUM(revenue) FILTER (WHERE month = 'Dec') AS Dec_Revenue
FROM Department
GROUP BY id;

-- SQL
SELECT
    id,
    SUM(CASE WHEN month = 'Jan' THEN revenue ELSE NULL END) AS Jan_Revenue,
    SUM(CASE WHEN month = 'Feb' THEN revenue ELSE NULL END) AS Feb_Revenue,
    SUM(CASE WHEN month = 'Mar' THEN revenue ELSE NULL END) AS Mar_Revenue,
    SUM(CASE WHEN month = 'Apr' THEN revenue ELSE NULL END) AS Apr_Revenue,
    SUM(CASE WHEN month = 'May' THEN revenue ELSE NULL END) AS May_Revenue,
    SUM(CASE WHEN month = 'Jun' THEN revenue ELSE NULL END) AS Jun_Revenue,
    SUM(CASE WHEN month = 'Jul' THEN revenue ELSE NULL END) AS Jul_Revenue,
    SUM(CASE WHEN month = 'Aug' THEN revenue ELSE NULL END) AS Aug_Revenue,
    SUM(CASE WHEN month = 'Sep' THEN revenue ELSE NULL END) AS Sep_Revenue,
    SUM(CASE WHEN month = 'Oct' THEN revenue ELSE NULL END) AS Oct_Revenue,
    SUM(CASE WHEN month = 'Nov' THEN revenue ELSE NULL END) AS Nov_Revenue,
    SUM(CASE WHEN month = 'Dec' THEN revenue ELSE NULL END) AS Dec_Revenue
FROM Department
GROUP BY id;
