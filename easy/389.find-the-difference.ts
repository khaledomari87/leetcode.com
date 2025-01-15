// https://leetcode.com/problems/find-the-difference/solutions/6285003/two-approaches/

function findTheDifference(s: string, t: string): string {
    const counter = new Map<string, number>();
    for (const char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }
    for (const char of t) {
        const count = counter.get(char);
        if (!count) return char;
        counter.set(char, count - 1);
    }
    throw new Error('Invalid input!');
}

function findTheDifferenceXOR(s: string, t: string): string {
    let res = t.charCodeAt(t.length - 1);
    for (let i = 0; i < s.length; i++) {
        res += t.charCodeAt(i) - s.charCodeAt(i);
    }
    return String.fromCharCode(res);
}
