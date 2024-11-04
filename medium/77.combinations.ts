// https://leetcode.com/problems/combinations/

function combine(n: number, k: number): number[][] {
    const output = new Array<number[]>();
    const track = new Array<number>();
    const recursiveBT = (i: number) => {
        if (track.length === k) output.push([...track]);
        if (i > n || track.length >= k) return;
        track.push(i);
        recursiveBT(i + 1);
        track.pop();
        recursiveBT(i + 1);
    };
    recursiveBT(1);
    return output;
}
// console.log(`(${combine(10, 2).join('),(')})`);