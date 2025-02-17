// https://leetcode.com/problems/design-hashset/solutions/6434688/expandable-bucket/

class MyHashSet {
    private bucket: (boolean | undefined)[];
    constructor() {
        this.bucket = new Array<boolean | undefined>(1024);
    }
    add(key: number): void {
        this.resize(key + 1);
        this.bucket[key] = true;
    }
    remove(key: number): void {
        if (key < this.bucket.length) this.bucket[key] = false;
    }
    contains(key: number): boolean {
        return key < this.bucket.length && this.bucket[key] === true;
    }
    private resize(desiredSize: number) {
        if (desiredSize <= this.bucket.length) return;
        let newSize = this.bucket.length;
        while (desiredSize > newSize) {
            newSize *= 2;
        }
        const newBucket = new Array<boolean | undefined>(newSize);
        for (let i = 0; i < this.bucket.length; i++) {
            newBucket[i] = this.bucket[i];
        }
        this.bucket = newBucket;
    }
}
