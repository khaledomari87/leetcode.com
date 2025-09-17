// https://leetcode.com/problems/design-a-food-rating-system/solutions/7198782/lazy-heap-hashmap/

import { PriorityQueue } from 'npm:@datastructures-js/priority-queue';

class FoodRatings {
    private foodMap: Map<string, number>;
    private cuisineMap = new Map<string, PriorityQueue<HeapEntry>>();

    constructor(private foods: string[], private cuisines: string[], private ratings: number[]) {
        this.foodMap = new Map(foods.map((f, i) => [f, i]));
        for (let i = 0; i < foods.length; i++) {
            const c = this.cuisines[i];
            if (!this.cuisineMap.has(c)) {
                this.cuisineMap.set(c, new PriorityQueue<HeapEntry>((a, b) => this.compare(a, b)));
            }
            this.cuisineMap.get(c)!.enqueue({ rating: this.ratings[i], name: this.foods[i] });
        }
    }

    private compare = (a: HeapEntry, b: HeapEntry) => b.rating - a.rating || a.name.localeCompare(b.name);

    changeRating(food: string, newRating: number) {
        const idx = this.foodMap.get(food)!;
        this.ratings[idx] = newRating;
        const cuisine = this.cuisines[idx];
        this.cuisineMap.get(cuisine)!.enqueue({ rating: newRating, name: food });
    }

    highestRated(cuisine: string) {
        const heap = this.cuisineMap.get(cuisine)!;
        while (true) {
            const top = heap.front();
            const currentRating = this.ratings[this.foodMap.get(top.name)!];
            if (top.rating === currentRating) return top.name;
            heap.dequeue(); // drop stale snapshot and continue
        }
    }
}

type HeapEntry = { rating: number; name: string };
