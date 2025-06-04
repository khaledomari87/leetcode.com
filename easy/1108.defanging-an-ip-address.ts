// https://leetcode.com/problems/defanging-an-ip-address/solutions/6810210/iterative-replaceall/

const defangIPaddr = (ip: string) => ip.replaceAll('.', '[.]');

const defangIPaddrIterative = (ip: string) => {
    const res: string[] = [];
    for (let i = ip.length - 1; i >= 0; i--) {
        res.push(ip[i] === '.' ? '[.]' : ip[i]);
    }
    return res.reverse().join('');
};
