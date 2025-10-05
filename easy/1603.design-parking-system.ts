// https://leetcode.com/problems/design-parking-system/solutions/7250159/simple-simulation/

class ParkingSystem {
    private inParking;
    private capacity;
    constructor(big: number, medium: number, small: number) {
        this.inParking = [0, 0, 0];
        this.capacity = [big, medium, small];
    }
    addCar = (carType: number) =>
        this.inParking[--carType] < this.capacity[carType] &&
        Boolean(++this.inParking[carType]);
}
