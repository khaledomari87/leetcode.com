-- https://leetcode.com/problems/combine-two-tables/solutions/6259200/left-join/

SELECT p.firstName, p.lastName, a.city, a.state
FROM Person p
LEFT JOIN Address a ON a.personId = p.personId
;
