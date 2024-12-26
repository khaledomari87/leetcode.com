function convertToTitle(num: number): string {
    const A = 'A'.charCodeAt(0), aphabets = 26;
    let output = '';
    while (num-- > 0) {
        const charCode = (num % aphabets) + A;
        output = String.fromCharCode(charCode) + output;
        num = Math.floor(num / aphabets);
    }
    return output;
}
