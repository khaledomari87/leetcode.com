-- https://leetcode.com/problems/top-travellers/solutions/6937346/compatible-query/

SELECT name, COALESCE(SUM(distance), 0) AS travelled_distance
FROM Users u
LEFT JOIN Rides ON u.id = user_id
GROUP BY u.id, name
ORDER BY travelled_distance DESC, name ASC
;
