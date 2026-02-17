const countOnes = (n: number) => n.toString(2).split('').reduce((r, b) => r + +b, 0);

export default countOnes;
