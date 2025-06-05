-- https://leetcode.com/problems/article-views-i/solutions/6813769/sql/

SELECT DISTINCT viewer_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY viewer_id;
