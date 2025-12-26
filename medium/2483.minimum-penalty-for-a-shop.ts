// https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/7439986/two-passes/

function bestClosingTime(customers: string) {
    let yes = customers.split('').reduce((s, c) => s + +(c === 'Y'), 0);
    let no = 0, hour = -1, penalty = Infinity;
    for (let i = 0; i < customers.length; i++) {
        if (yes + no < penalty) {
            penalty = yes + no, hour = i;
        }
        yes -= +(customers[i] === 'Y');
        no += +(customers[i] !== 'Y');
    }
    return yes + no < penalty ? customers.length : hour;
}
