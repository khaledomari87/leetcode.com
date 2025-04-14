// https://leetcode.com/problems/reverse-only-letters/solutions/6649312/stack/

function reverseOnlyLetters(s: string, S = s.split('')) {
    const alpha: number[] = [], other: number[] = [];
    S.forEach((c, i) => {
        (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' ? alpha : other).push(i);
    });
    other.reverse();
    return Array.from(
        { length: s.length },
        (_, i) => S[(other.at(-1) === i ? other : alpha).pop()!],
    ).join('');
}
