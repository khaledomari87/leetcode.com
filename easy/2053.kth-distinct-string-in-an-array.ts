// https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/7391044/hash-map/

function kthDistinct(arr: string[], k: number) {
    const map = arr.reduce(
        (m, s) => m.set(s, m.has(s)),
        new Map<string, boolean>(),
    );
    for (const s of arr) if (!map.get(s) && !--k) return s;
    return '';
}
