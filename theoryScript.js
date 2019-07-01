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

let btn = document.querySelector('.btn'),
elem = document.querySelector('.box');

function myAnimation () {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    // if (event.target && event.target.tagName == 'BUTTON') {
    // if (event.target && event.target.classList.contains('first')) {
    if (event.target && event.target.matches('button.first')) {
        console.log('check');
    }
});