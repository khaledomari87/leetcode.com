// https://leetcode.com/problems/daily-temperatures/

function dailyTemperatures(temperatures: number[]): number[] {
    const history = new Array<number>();
    const output = new Array<number>(temperatures.length).fill(0);
    for (let index = 0; index < temperatures.length; index++) {
        const value = temperatures[index];
        while (history.length > 0 && temperatures[history[history.length - 1]] < value) {
            const previous = history.pop()!;
            output[previous] = index - previous;
        }
        history.push(index);
    }
    return output;
};
