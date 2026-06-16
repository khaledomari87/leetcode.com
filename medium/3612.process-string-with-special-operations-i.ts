// https://leetcode.com/problems/process-string-with-special-operations-i/solutions/8337329/brute-force/

function processStr(s: string) {
    const r: string[] = [];
    for (const c of s) {
        c == '*' ? r.pop() : c == '#' ? r.push(...r) : c == '%' ? r.reverse() : r.push(c);
    }
    return r.join('');
}
