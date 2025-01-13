// https://leetcode.com/problems/add-digits/solutions/6273709/log-n-solution/

function addDigits(num: number) {
    while (num > 9) {
        let remain = num, sum = 0;
        while (remain > 0) {
            sum += remain % 10;
            remain = Math.floor(remain / 10);
        }
        num = sum;
    }
    return num;
}
