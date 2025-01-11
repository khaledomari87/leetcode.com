SELECT DISTINCT email
FROM (
    SELECT 
        email,
        COUNT(*) OVER (PARTITION BY email) AS email_count
    FROM Person
) t
WHERE email_count > 1;
