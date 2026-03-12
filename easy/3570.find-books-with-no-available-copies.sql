// https://leetcode.com/problems/find-books-with-no-available-copies/solutions/7644059/universal-query-for-all-servers/

-- MySQL | PostgreSQL | Oracle | MSSQL
SELECT l.book_id, title, author, genre,
    publication_year, total_copies AS current_borrowers
FROM library_books l
JOIN borrowing_records b
ON l.book_id = b.book_id AND return_date IS NULL
GROUP BY l.book_id, title, author, genre, publication_year, total_copies
HAVING COUNT(*) = total_copies
ORDER BY total_copies DESC, title;
