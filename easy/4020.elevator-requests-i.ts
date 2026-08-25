// https://leetcode.com/problems/elevator-requests-i/solutions/8463388/linear-solution/

function elevatorRequests(n: number, requests: number[]) {
    let total = 0, prev = 0;
    for (const req of requests) {
        total += Math.abs(prev - req);
        prev = req;
    }
    return total;
}
