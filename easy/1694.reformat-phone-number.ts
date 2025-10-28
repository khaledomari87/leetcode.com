// https://leetcode.com/problems/reformat-phone-number/solutions/7307460/regexp-match/

function reformatNumber(number: string) {
    const res = [...number.replace(/\D/g, '').match(/\d{1,3}/g)!];
    if (res[res.length - 1].length === 1) { // Move last digit from res[-2] to res[-1]
        res[res.length - 1] = res[res.length - 2].substring(2) + res[res.length - 1];
        res[res.length - 2] = res[res.length - 2].substring(0, 2);
    }
    return res.join('-');
}
