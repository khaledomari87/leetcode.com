// https://leetcode.com/problems/candy/solutions/6802984/simple-greedy/

function candy(ratings: number[]) {
    const cnt = new Array<number>(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) cnt[i] = cnt[i - 1] + 1;
    }
    for (let i = ratings.length - 2, max = Math.max; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) cnt[i] = max(cnt[i], cnt[i + 1] + 1);
    }
    return cnt.reduce((a, b) => a + b);
}
