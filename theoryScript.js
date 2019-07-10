// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '5px';

// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'orange';
// circle[2].style.backgroundColor = 'lightgreen';

// // heart.forEach(function(item) {
// //     item.style.backgroundColor = 'lightblue';
// // });

// let div = document.createElement('div'),
//     text = document.createTextNode('Тут был я');

// div.classList.add('black');

// // div.innerHTML = '<h1>Hello, World</h1>';
// let textComment = prompt('Enter your comment: ', '');
// div.textContent = textComment;

// // document.body.appendChild(div);
// // wrapper.appendChild(div);
// document.body.insertBefore(div, circle[1]);

// console.log(div);

// lesson 6

// let btn = document.querySelectorAll('button'),
// 	wrap = document.querySelector('.wrapper'),
// 	link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('You pushed first button');
// };

// btn[0].onclick = function() {
//     alert('You pushed first button again');
// };

// btn[0].addEventListener('click', function (event) {
// 	console.log('Event: ' + event.type + ' with element ' + event.target);
// });

// wrap.addEventListener('click', function() {
// 	console.log('Event: ' + event.type + ' with element ' + event.target);
// });

// link.addEventListener('click', function(event){
// 	event.preventDefault();
// 	console.log('Event: ' + event.type + ' with element ' + event.target);
// });

// btn.forEach(function(item) {
// 	item.addEventListener('mouseleave', function() {
// 		console.log('Exit!');
// 	});
// });



// btn[0].addEventListener('mouseenter', function() {
//     alert('You hovered on the first button');
// });


// Lesson 7 

// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello() {
//     console.log('Hello, World!');
// }

// let timerId = setTimeout(function log(){
//     console.log('Hey');
//     setTimeout(log, 2000);
// }, 2000);

// let btn = document.querySelector('.btn'),
// elem = document.querySelector('.box');

// function myAnimation () {
//     let pos = 0;

//     let id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// let btnBlock = document.querySelector('.btn-block'),
// btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     // if (event.target && event.target.tagName == 'BUTTON') {
//     // if (event.target && event.target.classList.contains('first')) {
//     if (event.target && event.target.matches('button.first')) {
//         console.log('check');
//     }
// });

// new Obj

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("a?", ""),
//         this.b = +prompt("b?", "");
//     }
//     this.sum = function() {
//         alert(this.a + this.b);
//     }
//     this.mult = function() {
//         alert(this.a * this.b);
//     }
// }

// let exmpl = new Calculator();

// exmpl.read();
// exmpl.sum();
// exmpl.mult();

// function CoffeeMachine(power) {
//     this.power = power;
//     this.waterAmount = 0;
// }

// CoffeeMachine.prototype.WaterHeatCapacity = 4200;

// CoffeeMachine.prototype.getTimeBoil = function() {
//     return this.waterAmount * this.WaterHeatCapacity * 80 / this.power;
// };

// CoffeeMachine.prototype.run = function() {
//     setTimeout(function() {
//         alert("Here is your coffee!");
//     }, this.getTimeBoil());
// };

// CoffeeMachine.prototype.setWaterAmount = function(amount) {
//     this.waterAmount = amount;
// };

// let coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();

// les 25

// let box = document.querySelector('.box'),
//     btn = document.querySelector('button');

// let width = box.scrollWidth,
//     height = box.scrollHeight;

// console.log(width);
// console.log(height);
// console.log(box.getBoundingClientRect());

// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);


// btn.addEventListener('click', function() {
//     //box.style.height = box.scrollHeight + 'px';
//     box.scrollTop = 0;
// });

// constructor

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }
// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + ' gone');
// }

// let Rajesh = new User('Rajesh', 25),
// alex = new User('Alex', 23);

// console.log(Rajesh);
// console.log(alex);

// Rajesh.exit();

// Class

// class User {
//     constructor(id, name) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`);
//     }
//     exit() {
//         console.log(`User ${this.name} has gone`);
//     }
// }

// let jack = new User('Jack', 25);
// let steve = new User('Steve', 27);

// console.log(jack);
// console.log(steve);
// jack.exit();
// steve.hello();

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// es6

// let name = 'Jack',
// age = 30,
// mail = 'exmpl@gmail.com';

// //document.write('Пользователю ' + name + ' ' + age + ' лет. Его ел. адрес: ' + mail);
// document.write(`
// Пользователю ${name} ${age} лет. Его ел. адрес: ${mail}
// <h1>Hello</h1>
// <button>Don't push me</button>
// `);

//spread operator

// let video = ['youtube', 'vimeo', 'rutube'],
// blogs = ['wordpress', 'livejournal', 'blogger'],
// internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log (a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(a + b + c);
// }

// let numbers = [2, 5, 7];

// log(...numbers);

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
        elem.textContent = 'New element "div"';
    }
}

const item = new Options(200, 750, "lightpink", 25, "center");

item.createDiv();