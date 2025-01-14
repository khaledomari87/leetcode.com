export default function guess(num: number) {
    const r = Math.random();
    return r < .333 ? -1 : r < .666 ? 0 : 1;
}
