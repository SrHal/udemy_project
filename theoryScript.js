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

let btn = document.querySelectorAll('button'),
	wrap = document.querySelector('.wrapper'),
	link = document.querySelector('a');

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

link.addEventListener('click', function(event){
	event.preventDefault();
	console.log('Event: ' + event.type + ' with element ' + event.target);
});

btn.forEach(function(item) {
	item.addEventListener('mouseleave', function() {
		console.log('Exit!');
	});
});



// btn[0].addEventListener('mouseenter', function() {
//     alert('You hovered on the first button');
// });