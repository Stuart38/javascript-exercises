const sumAll = function (x, y) {
    let total = 0;
    if (x <= 0 || y <= 0) {
        return 'ERROR';
    } else if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
        return 'ERROR';
    } else if (x > y) {
        for (i = y; i <= x; i++) {
            total += i;
        }
        return (total);
    }
    for (i = x; i <= y; i++) {
        total += i;
    }
    return (total);
};

// Do not edit below this line
module.exports = sumAll;
