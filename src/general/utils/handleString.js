export const handleMoneyToString = (money) => {
    let moneyAfterToString = '';
    const sMoneyNoDot = money ? money.toString() : '0';
    const length = sMoneyNoDot.length;
    let i = sMoneyNoDot.length;
    if (length <= 3) {
        return sMoneyNoDot;
    } else {
        for (i = sMoneyNoDot.length; i > 3; i -= 3) {
            moneyAfterToString = '.'.concat(sMoneyNoDot.slice(i - 3, i)).concat(moneyAfterToString);
        }
        if (i > 0) {
            moneyAfterToString = sMoneyNoDot.slice(0, i).concat(moneyAfterToString);
        } else if (i === 0) {
            moneyAfterToString = moneyAfterToString.slice(1, moneyAfterToString.length - 1);
        }
        return moneyAfterToString;
    }
};

export const handleStringToMoney = (s) => {
    return Number.parseInt(s.replaceAll('.', ''));
};
