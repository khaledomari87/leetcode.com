// https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/7413771/without-hash-map/

function canBeEqual(s1: string, s2: string) {
    const a1 = s1.split('');
    for (let i = 0; i < 2; i += 1) {
        if (a1[i] !== s2[i]) {
            [a1[i], a1[i + 2]] = [a1[i + 2], a1[i]];
        }
    }
    return a1.every((c, i) => c === s2[i]);
}
