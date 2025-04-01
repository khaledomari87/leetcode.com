// https://leetcode.com/problems/solving-questions-with-brainpower/solutions/6601999/two-approaches/

function mostPoints(questions: [number, number][]) {
    const dfs = (i: number, cache: number[]): number =>
        i >= questions.length ? 0 : cache[i] = cache[i] || Math.max(
            questions[i][0] + dfs(i + questions[i][1] + 1, cache),
            dfs(i + 1, cache),
        );
    return dfs(0, new Array<number>(questions.length));
}

function mostPointsDP(questions: [number, number][]) {
    const dp = new Array<number>(questions.length);
    dp[questions.length - 1] = questions.at(-1)![0];
    for (let i = questions.length - 2; i >= 0; i--) {
        if (questions[i][1] + i + 1 < dp.length) {
            questions[i][0] += dp[questions[i][1] + i + 1];
        }
        dp[i] = Math.max(questions[i][0], dp[i + 1]);
    }
    return dp[0];
}
