-- https://leetcode.com/problems/triangle-judgement/solutions/6358523/x-y-z-2-greatest-x-y-z/

SELECT
    x, y, z,
    CASE
        WHEN x + y + z > 2 * GREATEST(x, y, z) THEN 'Yes'
        ELSE 'No'
    END as triangle
from Triangle;
