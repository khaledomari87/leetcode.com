// https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/6406040/simplest-solution-simulation/

function removeOccurrences(s: string, p: string, m = p.length): string {
    let i: number;
    while ((i = s.indexOf(p)) > -1) s = `${s.slice(0, i)}${s.slice(i + m)}`;
    return s;
}
