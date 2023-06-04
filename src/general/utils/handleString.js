export const handleMoneyToString = (money) => {
    let moneyAfterToString = '';
    const sMoneyNoDot = money ? money.toString() : '0';
    let i = sMoneyNoDot.length;
    for (i = sMoneyNoDot.length; i >= 3; i -= 3) {
        moneyAfterToString = '.'.concat(sMoneyNoDot.slice(i - 3, i)).concat(moneyAfterToString);
    }
    if (i > 0) {
        moneyAfterToString = sMoneyNoDot.slice(0, i).concat(moneyAfterToString);
    }
    return moneyAfterToString;
};
