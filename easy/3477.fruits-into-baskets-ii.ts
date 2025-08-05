// https://leetcode.com/problems/fruits-into-baskets-ii/solutions/7045403/clean/

const numOfUnplacedFruits = (fruits: number[], baskets: number[]) =>
    fruits.reduce(
        (res, quant) => {
            const index = baskets.findIndex((cap) => cap >= quant);
            if (index > -1) baskets[index] = 0, res--;
            return res;
        },
        fruits.length,
    );
