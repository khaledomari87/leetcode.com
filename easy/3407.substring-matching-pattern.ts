// https://leetcode.com/problems/substring-matching-pattern/solutions/6257174/simple-and-efficient/

function hasMatch(s: string, p: string): boolean {
    const [part1, part2] = p.split('*');
    const [index1, index2] = [s.indexOf(part1), s.lastIndexOf(part2)];
    return index1 + part1.length <= index2 && index1 > -1;
}
