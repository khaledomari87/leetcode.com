// https://leetcode.com/problems/remove-zeros-in-decimal-representation/solutions/7407616/string-one-line/

const removeZeros = (n: number) => +`${n}`.split('').filter((d) => +d).join('');
