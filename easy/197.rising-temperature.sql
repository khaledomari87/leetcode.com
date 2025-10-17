-- https://leetcode.com/problems/rising-temperature/solutions/6269966/simplest-solution/

-- Oracle / PostgreSQL
SELECT w.id
FROM Weather w
INNER JOIN Weather prev on
    w.recordDate - prev.recordDate = 1 AND
    w.temperature > prev.temperature

-- MySQL
SELECT w.id
FROM Weather w
INNER JOIN Weather prev ON
    DATEDIFF(w.recordDate, prev.recordDate) = 1 AND
    w.temperature > prev.temperature
