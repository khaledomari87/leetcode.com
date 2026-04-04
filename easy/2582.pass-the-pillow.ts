// https://leetcode.com/problems/pass-the-pillow/solutions/7774919/o1-math/

function passThePillow(n: number, time: number) {
    time = time % (2 * (n - 1));
    return time < n ? time + 1 : 2 * n - time - 1;
}
