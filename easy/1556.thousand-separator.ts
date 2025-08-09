// https://leetcode.com/problems/thousand-separator/solutions/7060594/one-line-german-locale-locale/

const thousandSeparator = (n: number) => n.toLocaleString('de-DE');

function thousandSeparatorTraversal(n: number) {
    const res: string[] = [];
    String(n).split('').reverse().forEach((c, i) => {
        if (i % 3 === 0 && i > 0) res.push('.');
        res.push(c);
    });
    return res.reverse().join('');
}
