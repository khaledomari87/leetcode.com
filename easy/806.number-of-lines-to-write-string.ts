// https://leetcode.com/problems/number-of-lines-to-write-string/solutions/6496095/simulation/

function numberOfLines(widths: number[], s: string): [number, number] {
    let lines = +(s.length > 0), lastLineWidth = 0;
    for (let i = 0, a = 'a'.charCodeAt(0); i < s.length; i++) {
        const charWidth = widths[s.charCodeAt(i) - a];
        lastLineWidth += charWidth;
        if (lastLineWidth > 100) {
            lines++;
            lastLineWidth = charWidth;
        }
    }
    return [lines, lastLineWidth];
}
