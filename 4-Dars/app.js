// Funtions --------------------------------------


// Function Declaration

// sayHello()

// function sayHello() {
//     // code
//     // funksiya yozilishidan oldin chaqirish mumkin
//     console.log("hello W0rld");
// }

// Function Expression, let yoki const bilan yoziladi
// const sayBye = function() {
//     // funksiya yozilishidan oldin chaqirib bolmaydi
//     console.log('goodbye World');
// }
// sayBye()

// Arrow Function
// arrow()
// let arrow = () => {
//     console.log('Arrow Function');
// }



// DOM bn ishlash ------------------------


// Eski usuli id orqali===
// const tit = document.getElementById('title')
// console.log(tit);

// Eski usuli class orqali===
// const button = document.getElementsByClassName('btn')
// console.log(button);

// Eski usuli tag orgali===
// const parag = document.getElementsByTagName('p')
// console.log(parag);


// Yangi usuli  id orqali ===

// const titl = document.querySelector('#title')
// console.log(titl);

// Yangi usuli  class orqali ===

// const button = document.querySelector('.btn')
// console.log(button);

// const parag = document.querySelector('p')
// console.log(parag);

// const buttons = document.querySelectorAll('button')
// console.log(buttons);


// hodisalar (addEventListener)-------------------
// const hodisa = document.querySelector('.btn')
// hodisa.addEventListener('click', (event) => {
//     event.target.textContent = 'Bosdim'
// })


// setTimeout(() => {
//     console.log('hello World');
// }, 3000)

// console.log('salom');


// function greet(name) {
//     console.log('Hello', name);
    
// }

// setTimeout(greet, 3000, 'Gofur')

// setInterval - JS da bir text vaqt oralgida 

// setInterval(() =>{
//     console.log('hello');
    
// }, 2000)

// let count = 1
// setInterval(() => {
//     console.log(count);
//     count++
// }, 1000)


const goInterval = setInterval(() => {
    console.log('ishlayapti...');
    
}, 1000)

setTimeout(() => {
    clearInterval(goInterval)
    console.log('Toxtadi');
}, 5000)