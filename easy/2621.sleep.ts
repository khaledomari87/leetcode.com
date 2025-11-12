// https://leetcode.com/problems/sleep/solutions/7342400/one-line/

const sleep = (m: number) => new Promise<void>((r) => setTimeout(() => r(), m));
