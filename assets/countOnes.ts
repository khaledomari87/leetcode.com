export default function countOnes(num: number) {
    let count = 0;
    for (const b of num.toString(2)) b === '1' && count++;
    return count;
}
