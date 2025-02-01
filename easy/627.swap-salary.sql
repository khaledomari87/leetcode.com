-- https://leetcode.com/problems/swap-salary/solutions/6358796/sql/

UPDATE Salary SET sex =
CASE sex
    WHEN 'm' THEN 'f'
    ELSE 'm'
END
