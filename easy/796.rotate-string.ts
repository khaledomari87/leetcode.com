// https://leetcode.com/problems/rotate-string/solutions/6472009/repeat-then-includes/

const rotateString = (s: string, goal: string) => s.length === goal.length && s.repeat(2).includes(goal);
