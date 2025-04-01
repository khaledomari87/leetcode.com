// https://leetcode.com/problems/solving-questions-with-brainpower/solutions/6601999/two-approaches/

function mostPoints(questions: [number, number][]) {
    const cache = new Array<number>(questions.length);
    const dfs = (i: number) => {
        if (i >= questions.length) return 0;
        if (!cache[i]) {
            cache[i] = Math.max(
                questions[i][0] + dfs(i + questions[i][1] + 1),
                dfs(i + 1),
            );
        }
        return cache[i];
    };
    return dfs(0);
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
