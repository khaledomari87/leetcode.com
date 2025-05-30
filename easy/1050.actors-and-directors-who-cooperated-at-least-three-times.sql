-- https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/solutions/6796693/two-approaches-group-partition/

SELECT actor_id, director_id
FROM ActorDirector
GROUP by actor_id, director_id
HAVING COUNT(*) > 2;

------

SELECT DISTINCT actor_id, director_id
FROM (
    SELECT
        actor_id,
        director_id,
        COUNT(*) OVER (PARTITION BY actor_id, director_id) AS cnt
    FROM ActorDirector
) t1
WHERE cnt > 2;
