// https://leetcode.com/problems/coupon-code-validator/solutions/7410613/functional-programming/

function validateCoupons(code: string[], businessLine: string[], active: boolean[]) {
    const fav = ['electronics', 'grocery', 'pharmacy', 'restaurant'], reg = /^[A-Za-z0-9_]+$/;
    return code
        .map((c, i) => ({ c, bl: businessLine[i], a: active[i], o: fav.indexOf(businessLine[i]) }))
        .filter((v, i) => reg.test(v.c) && fav.includes(v.bl) && v.a)
        .sort((a, b) => a.o - b.o || +(b.c < a.c) - +(b.c > a.c)).map((v) => v.c);
}
