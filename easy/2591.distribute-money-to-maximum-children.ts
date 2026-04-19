// https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/7997913/o1/

function distMoney(money: number, kids: number) {
    if (money < kids) return -1;
    money -= kids;
    const res = Math.min(kids, Math.floor(money / 7));
    money = money - res * 7;
    return res - +(res == kids-- && money > 0 || res == kids && money == 3);
}
