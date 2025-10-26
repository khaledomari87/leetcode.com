// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/7303743/if-else/

function maximumTime(time: string) {
    const a = time.split('');

    if (`${a[0]}${a[1]}` === '??') a[0] = '2', a[1] = '3';
    else if (a[0] === '?') a[0] = +a[1] > 3 ? '1' : '2';
    else if (a[1] === '?') a[1] = a[0] === '2' ? '3' : '9';

    if (a[3] === '?') a[3] = '5';
    if (a[4] === '?') a[4] = '9';

    return a.join('');
}
