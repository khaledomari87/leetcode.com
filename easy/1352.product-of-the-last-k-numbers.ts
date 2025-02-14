// https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/6420651/short-prefix-solution-o-1-for-add-and-getproduct/

class ProductOfNumbers {
    private prfx: number[] = [1];
    add(num: number) {
        num ? this.prfx.push(num * this.prfx.at(-1)!) : this.prfx = [1];
    }
    getProduct = (k: number) => k < this.prfx.length ? this.prfx.at(-1)! / this.prfx.at(-k - 1)! : 0;
}
