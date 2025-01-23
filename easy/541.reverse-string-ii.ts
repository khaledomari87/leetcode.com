// https://leetcode.com/problems/reverse-string-ii/solutions/6321563/direct/

function reverseStr(s: string, k: number): string {
    const a = s.split('');
    for (let i = 0; i < a.length; i += 2 * k) {
        const start = i;
        const end = Math.min(i + k, a.length);
        a.splice(start, end - start, ...a.slice(start, end).reverse());
    }
    return a.join('');
}
