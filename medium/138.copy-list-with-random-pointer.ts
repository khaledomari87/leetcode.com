// https://leetcode.com/problems/copy-list-with-random-pointer/solutions/5920042/simple-and-efficient-space-complexity-o-n/

class _Node {
    val: number;
    next: _Node | null;
    random: _Node | null;
    constructor(val?: number, next?: _Node | null, random?: _Node | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

function copyRandomList(inputHead: _Node | null): _Node | null {
    if (!inputHead) return inputHead;

    const map = new Map([[inputHead, new _Node(inputHead.val)]]);

    let clonePointer = map.get(inputHead)!;
    let inputPointer = inputHead.next;
    while (inputPointer) {
        clonePointer.next = new _Node(inputPointer.val);
        clonePointer = clonePointer.next;
        map.set(inputPointer, clonePointer);
        inputPointer = inputPointer.next;
    }

    clonePointer = map.get(inputHead)!;
    inputPointer = inputHead;
    while (inputPointer) {
        clonePointer.random = inputPointer.random && map.get(inputPointer.random) || null;
        inputPointer = inputPointer.next;
        clonePointer = clonePointer.next!;
    }

    return map.get(inputHead)!;
}
