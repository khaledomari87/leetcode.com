-- https://leetcode.com/problems/find-followers-count/solutions/7398159/universal-query-all-servers/

SELECT
    user_id,
    COUNT(follower_id) AS followers_count
FROM Followers
GROUP BY user_id
ORDER BY user_id;
