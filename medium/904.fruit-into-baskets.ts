// https://leetcode.com/problems/fruit-into-baskets/solutions/7043126/sliding-window/

function totalFruit(fruits: number[]) {
    const n = fruits.length, set = new Set([fruits[0]]);
    let res = 1;
    for (let l = 0, r = 1; r < n; r++) {
        set.add(fruits[r]);
        if (set.size > 2) {
            l = r - 1;
            while (fruits[l] === fruits[l - 1]) l--;
            set.delete(fruits[l - 1]);
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
}
