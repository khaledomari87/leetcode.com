class MyHashMap {
    private bucket: (number | undefined)[];

    constructor() {
        this.bucket = new Array<number>(1024); // intial length 1k
    }

    get(key: number): number {
        return this.bucket[key] === undefined ? -1 : this.bucket[key];
    }

    remove(key: number): void {
        this.bucket[key] = undefined;
        this.resize(key);
    }

    put(key: number, value: number): void {
        this.resize(key + 1);
        this.bucket[key] = value;
    }

    private resize(minSize: number) {
        if (minSize === this.bucket.length) return;
        if (minSize < this.bucket.length) {
            // You may shrink bucket size here if you wanted.
            // It'll take you O(n) to find the last index of undefined value.
            // You also need to avoid setting bucket size to 0.

            // Another method is to keep track of the last index of undefined
            // is to use another array and push/pop from/to it
            // whenever you put() or remove().

            // I didn't think any of that was necessary.
        } else {
            // expand bucket size
            let desiredSize = this.bucket.length;
            while (minSize > desiredSize) {
                desiredSize *= 2;
            }
            if (desiredSize > this.bucket.length) {
                this.bucket.length = desiredSize;
            }
        }
    }
}
