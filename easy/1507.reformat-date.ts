// https://leetcode.com/problems/reformat-date/solutions/7007892/clean-ts-js/

// deno-fmt-ignore
function reformatDate(date: string) {
    let [dd, mm, yyyy] = date.split(' ');
    dd = dd.match(/^\d+/)![0].padStart(2, '0');
    mm = String(1 + [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ].indexOf(mm)).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
}
