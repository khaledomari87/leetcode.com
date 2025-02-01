-- https://leetcode.com/problems/biggest-single-number/solutions/6358751/postgresql-mysql/

(
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(*) = 1
    ORDER BY num DESC
    LIMIT 1
) UNION ALL (
    SELECT NULL as num
)
LIMIT 1