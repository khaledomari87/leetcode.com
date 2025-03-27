// https://leetcode.com/problems/lemonade-change/solutions/6587191/optimal-solution/

function lemonadeChange(bills: (5 | 10 | 20)[]) {
    for (let i = 0, fives = 0, tens = 0; i < bills.length; i++) {
        if (bills[i] === 5) fives++;
        else if (bills[i] === 10) --fives, tens++;
        else tens > 0 ? (tens--, fives--) : fives -= 3;
        if (fives < 0) return false;
    }
    return true;
}
