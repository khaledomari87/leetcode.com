-- https://leetcode.com/problems/big-countries/solutions/6353483/sql/

SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000
