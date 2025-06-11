-- https://leetcode.com/problems/students-and-examinations/solutions/6832378/simplest-solution/

SELECT
    st.student_id, st.student_name, su.subject_name,
    COUNT(ex.student_id) AS attended_exams
FROM Students st
CROSS JOIN Subjects su -- same as JOIN Subjects su ON 1 = 1
LEFT JOIN Examinations ex ON
    ex.student_id = st.student_id AND
    su.subject_name = ex.subject_name
GROUP BY st.student_id, st.student_name, su.subject_name
ORDER BY st.student_id, su.subject_name;
