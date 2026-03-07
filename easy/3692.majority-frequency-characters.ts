// https://leetcode.com/problems/majority-frequency-characters/solutions/7632996/linear-solution/

const max = Math.max;
function majorityFrequencyGroup(s: string) {
    const cnt = s.split('').reduce(
        (m, c) => m.set(c, (m.get(c) || 0) + 1),
        new Map<string, number>(),
    );
    let x = 0;
    const grp = [...cnt].reduce((m, [, f]) => {
        x = max(x, (m.get(f) || 0) + 1);
        return m.set(f, (m.get(f) || 0) + 1);
    }, new Map<number, number>());
    const k = [...grp].reduce((r, [a, b]) => max(r, a * +(b === x)), 0);
    return [...cnt].filter(([, f]) => f === k).map(([c]) => c).join('');
}
