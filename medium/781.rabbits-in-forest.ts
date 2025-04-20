const numRabbits = (answers: number[]) =>
    answers.reduce((a, n) => (a[n] = (a[n] || 0) + 1, a), new Array<number>(1000))
        .reduce((res, cnt, idx) => res + Math.ceil(cnt / ++idx) * idx, 0);
