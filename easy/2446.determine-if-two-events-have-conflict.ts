// https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/7555044/clean/

function haveConflict(event1: string[], event2: string[]) {
    const [[s1, e1], [s2, e2]] = [event1, event2].map((t) =>
        t.map((t) => t.split(':').reduce((r, v, i) => r + +v * 60 ** +!i, 0))
    );
    return s1 <= e2 && e1 >= s2;
}
