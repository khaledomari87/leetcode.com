// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/7098718/linear-solution/

function countStudents(students: number[], sandwiches: number[]) {
    const counts = students.reduce((a, t) => (a[t]++, a), [0, 0]);
    for (let i = 0; i < sandwiches.length && counts[sandwiches[i]]; i++) {
        counts[sandwiches[i]]--;
    }
    return counts[0] + counts[1];
}
