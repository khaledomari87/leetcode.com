// https://leetcode.com/problems/simple-bank-system/solutions/7302297/clean-simulation/

class Bank {
    constructor(private balance: number[]) {}

    isValidAccount(...accounts: number[]) {
        return accounts.every((a) => a <= this.balance.length);
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if (
            !this.isValidAccount(account1, account2) ||
            money > this.balance[account1 - 1]
        ) return false;
        this.balance[account1 - 1] -= money;
        this.balance[account2 - 1] += money;
        return true;
    }

    deposit(account: number, money: number) {
        if (!this.isValidAccount(account)) return false;
        this.balance[account - 1] += money;
        return true;
    }

    withdraw(account: number, money: number) {
        if (
            !this.isValidAccount(account) ||
            money > this.balance[account - 1]
        ) return false;
        this.balance[account - 1] -= money;
        return true;
    }
}
