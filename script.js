var money = +prompt('What is your mounthly budget?:', ''),
date = prompt('Enter date:', ''),
value2 = +prompt('How much?:', ''),
value1 = prompt('Enter a mandatory expense item for this month:', 'summ'),
expenses = {};
expenses['value1'] = value2;

var appDate = {
    // value1: prompt('Enter a mandatory expense item for this month:', 'summ'),
    budget: money,
    timeData: date,
    expenses: expenses,
    optionalExpenses: {},
    income: [],
    savings: false
};


console.log(appDate);
