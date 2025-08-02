-- https://leetcode.com/problems/patients-with-a-condition/solutions/7036255/universal-query/

SELECT *
FROM Patients
WHERE
    conditions LIKE 'DIAB1%' OR
    conditions LIKE '% DIAB1%';
