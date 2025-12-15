// https://leetcode.com/problems/truncate-sentence/solutions/7415644/one-line/

const truncateSentence = (s: string, k: number) => s.split(' ').slice(0, k).join(' ');
