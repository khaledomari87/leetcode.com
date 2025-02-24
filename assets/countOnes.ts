export default function countOnes(num: number) {
    let count = 0;
    for (const b of num.toString(2)) count += +(b === '1');
    return count;
}
