// https://leetcode.com/problems/restore-finishing-order/solutions/7228352/optimal-solution/

function recoverOrder(order: number[], friends: number[]) {
    const set = new Set(friends);
    return order.filter((val) => set.has(val));
}
