// https://leetcode.com/problems/odd-string-difference/solutions/8101424/hash-set-minimum-space/

// deno-fmt-ignore
const diff = (s: string) => Array.from({ length: s.length - 1 },
    (_, i) => s.charCodeAt(i + 1) - s.charCodeAt(i)).join();

function oddString(words: string[]) {
    const [d0, d1, d2] = [0, 1, 2].map((i) => diff(words[i]));
    const s = new Set([d0, d1, d2]);
    if (s.size > 1) {
        return words[d0 == d1 ? 2 : d0 == d2 ? 1 : 0];
    }
    for (let i = 2; true; i++) {
        const k = diff(words[i]);
        if (!s.has(k)) return words[i];
        s.add(k);
    }
}
