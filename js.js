for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(', ');
// console.log(arr);

// let arr = ['aawe', 'zzz', 'pp', 'rqa'],
//     i = arr.join(', ');

//     console.log(arr);
//     console.log(i);

let arr = [1, 5, 12, 7, 49],
    i = arr.sort(compareNum);

    function compareNum(a, b) {
        return a - b;
    }

    console.log(arr);

    let soldier = {
        health: 100,
        armor: 100
    }

    let john = {
        health: 80
    }

    john.__proto__ = soldier;

console.log(john);
console.log(john.armor);