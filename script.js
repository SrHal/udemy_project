let money = +prompt('What is your mounthly budget:', ''),
    date = prompt('Enter date (YYYY-MM-DD):', '');

let appDate = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt('Enter a mandatory expense item for this month:', ''),
    a2 = +prompt('How much:', ''),
    a3 = prompt('Enter a mandatory expense item for this month:', ''),
    a4 = +prompt('How much:', '');

appDate.expenses.a1 = a2;
appDate.expenses.a3 = a4;

alert(appDate.budget / 30);