// https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/6616524/counting/

function uncommonFromSentences(s1: string, s2: string) {
    const counter = (s: string) => {
        const map = new Map<string, number>();
        s.split(' ').forEach((w) => map.set(w, (map.get(w) || 0) + 1));
        return map;
    };
    const map1 = counter(s1), map2 = counter(s2);
    return [
        ...[...map1.entries()].filter(([w, c]) => c === 1 && !map2.has(w)).map((w) => w[0]),
        ...[...map2.entries()].filter(([w, c]) => c === 1 && !map1.has(w)).map((w) => w[0]),
    ];
}

const uncommonFromSentences2 = (s1: string, s2: string) =>
    Array.from(
        `${s1} ${s2}`.split(' ').reduce(
            (map, w) => map.set(w, (map.get(w) || 0) + 1),
            new Map<string, number>(),
        ),
    ).filter((e) => e[1] === 1).map((e) => e[0]);
