// https://leetcode.com/problems/removing-stars-from-a-string/solutions/6170622/linear-solution-without-stack-20ms-short-and-simple/

function removeStars(s: string): string {
  const output: typeof s[] = [];
  for (let i = s.length - 1, skip = 0; i >= 0; i--) {
      s[i] === '*' && ++skip || skip === 0 && output.push(s[i]) || --skip;
  }
  return output.reduce((str, char) => char + str , '');
}