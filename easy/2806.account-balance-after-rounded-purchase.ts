// https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/7381892/one-line/

const accountBalanceAfterPurchase = (purchaseAmount: number) =>
    100 - 10 * Math.round(purchaseAmount / 10);
