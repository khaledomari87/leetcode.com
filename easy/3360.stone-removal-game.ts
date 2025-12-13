function canAliceWin(n: number, subtract = 10) {
    while ((n -= subtract) >= 0) subtract--;
    return subtract % 2 > 0;
}
