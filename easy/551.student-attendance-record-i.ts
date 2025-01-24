// https://leetcode.com/problems/student-attendance-record-i/solutions/6325537/optimal-solution/

function checkRecord(s: string) {
    let absent = 0, late = 0;
    for (const r of s) {
        r === 'L' ? late++ : late = 0;
        if (r === 'A') absent++;
        if (absent > 1 || late > 2) return false;
    }
    return true;
}
