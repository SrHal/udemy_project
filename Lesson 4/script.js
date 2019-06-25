let money, date;

start();

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length <= 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                console.log('введите правильную статью расходов');
                i--;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('средний уровень достатка');
        } else if (appData.moneyPerDay) {
            console.log('высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Какой процент?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome.toFixed(2));
        }
    },
    chooseOptExpenses: function () {
        let confirmOptExpenses = confirm('У Вас будут необязательные расходы?', '');
        if (confirmOptExpenses) {
            for (let i = 1; i <= 3; i++) {
                let a = prompt('Статья необязательных расходов?', ''),
                    b = prompt('Во сколько обойдется?', '');

                if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length <= 50) {
                    console.log((i) + ' ' + a + ' ' + b);
                    appData.optionalExpenses[i] = b;
                } else {
                    console.log('введите правильную статью расходов');
                    i--;
                }

            }
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
        if ((typeof (items)) != 'string' || (typeof (items)) == null || items == '') {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Что-то еще?', ''));
            appData.income.sort();
        }

        appData.income.forEach(function (itmeOfMassive, i) {
            console.log('Способы доп. зароботка: ' + (i+1) + '. ' + itmeOfMassive);
        });
    }


};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

function start() {
    money = +prompt('Ваш бюджет на месяц', '');
    date = prompt('Введите дату (YYYY-MM-DD):', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц', '');
    }
}