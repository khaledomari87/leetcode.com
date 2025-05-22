// https://leetcode.com/problems/number-of-recent-calls/solutions/6769275/binary-search/

class RecentCounter {
    private requests: number[] = [];
    ping(t: number) {
        const max = t - 3000;
        let L = 0, R = this.requests.length - 1;
        while (L <= R) {
            const M = L + R >>> 1;
            this.requests[M] < max ? L = M + 1 : R = M - 1;
        }
        return this.requests.splice(0, L), this.requests.push(t);
    }
}
