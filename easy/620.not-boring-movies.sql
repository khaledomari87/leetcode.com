-- https://leetcode.com/problems/not-boring-movies/solutions/6366053/sql/

SELECT *
FROM Cinema
WHERE id % 2 = 1 AND description != 'boring'
ORDER BY rating DESC
