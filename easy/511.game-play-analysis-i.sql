-- https://leetcode.com/problems/game-play-analysis-i/solutions/6312138/group-by-player-id/

SELECT player_id, MIN(event_date) AS first_login
FROM Activity
GROUP BY player_id
