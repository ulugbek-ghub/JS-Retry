//  Malumot turlari

//  var  and  let

// var da elon qilinmasidan oldin chiqarib boladi

// let da elon qilinmasidan oldin chiqarib bolmaydi

// console.log(name3);
// var name3 = "Charli"

// console.log(name3);
// let name3 = "Charli"

// {
//     let city = "New YOrk"
// }
// console.log(city);


// undefined - Ozgaruvchi elon qilingan, lekin qiymat berilmagan

// Obyekt icida mavjud bolmagan property

// const user = {
//     age: 25,
// }

// console.log(user.name);  // undefined


// let a = 5
// let b = "5"

// console.log(a == b); // tenglik
// console.log(a === b); // qatiy tenglik

// Malumot turlari
// Oddiy malumot turlari - Primitive data types

// Number
// String
// Boolean  true/false
// Null
// Undefined

    // Number
// const num = 78
// console.log(typeof num);
// console.log(num);

    // String
// const str = 'Ra\'no'
// const str2 = "33"

// console.log(str);
// console.log(str1);

    // Boolean
// const isMarried = false
// console.log(isMarried);

// console.log(null == undefined); //true
// console.log(null === undefined); //false

// const num
// console.log(num);

// Object - Kompleks malumot turi
// Object
// Array - Massiv
// Function
// Error

// Object
// 1.Kalit(property): 2.Qiymat(Value) - String, Number,Boolean,Undefined

// const person = {
//     name: "Asad",
//     age: 23,
//     hobbies: {
//         music: 'rock',
//         code: true
//     }
// }

// console.log(person.hobbies.code);

// Oddiy Massiv

    //         0        1       2        3
// const arr = ['red', 'green', 'blue', 'yellow']
// // console.log(arr[2]);

// // push() - massivga element qo'shadi
// arr.push('black')
// console.log(arr);

// // pop() - massivdan oxirgi elementni o'chiradi
// arr.pop()
// console.log(arr);

// // unshift() - massivga boshidan element qo'shadi
// arr.unshift('white')
// console.log(arr);

// // shift() - massivdan boshidan elementni o'chiradi
// arr.shift()
// console.log(arr);

// Window, Interpolatsiya, Operatorlar

// Window - Brauzer oynasi
// alert("Salom Dunyo!");

// confirm("Siz 18 yoshdan kattamisiz?");

// const age = confirm("Yoshingiz nechida?")
// console.log(typeof age);

const age = +prompt("Yoshingiz nechida?")
const ageNum = 3 + age
console.log(ageNum);