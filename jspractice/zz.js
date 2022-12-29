// console.log(123);
// console.log("anu");
// console.log(true);
// var greeting = "hello";
// console.log(greeting);

// console.log([1,2,3,4]);
// console.log({a:1,b:2});


//variables
// var name = 'anu' 
// name = 'Anu'
// console.log(name);

// var greeting //conditionally rendering some data
// greeting = 'anushka'
// console.log(greeting);

// var $name = 'Anushka'// letter,$,_,camelCase
// console.log($name);

//let
// let firstName = 'hi'
// console.log(firstName);

//const
// const name = 'hello'
// console.log(name);

// const numbers = [1,2,3,4,5]
// number.push(6)
// console.log(numbers);


// Data types
// primitive = string,num,bool,null,undefined,symbol
// object = object,array,date

//type conversion
// val = string(4)
// val = (3).toString()

//num or parsInt()
// val = Number("4")
// console.log(typeof val , val)
// val = 4
// console.log(val ,val.toFixed(7)) 7 zeros print agute point adhmele


//Coehesion converts to JS understands and doing it for us
// const val1 = "3"
// const val2 = 2
// const sum = val1 + val2 //OP 32
// console.log(sum, typeof sum);


//template literals
// const name='anu'
// const age='23'
// const job='UNEMPLOYED'
// let html

// html = `${name} is my name, ${age} is my age am ${job}`

// document.body.innerHTML = html


//object literals
// const person = {
//     Name :'anu',
//     age : 23,
//     hobbies :['drawing','photography'],
//     add : {
//         city:'mysore',
//         state:'karnataka'
//     },
//     getBirthYear:function () {
//         return 2022 - this.age
//     }
// }
// let val = person
// console.log(val.getBirthYear());


//function
// function greet(firstName) {
//     return `${firstName}`
// }
// console.log(greet('anu'));

//function expression
// const mul = function (a,b) {
//     return a*b
// }
// console.log(mul(2,4));

//immedietely invokable function
// (function(name){
//     console.log(`${name} ran..` );
// })('mani')

// const person = {
//     getBirthday: function(day) {
//         return `june ${day}`
//     },
// }

// console.log(person.getBirthday(3));


//ternary operator
// const id = 101
// console.log(id === 100 ? 'yes, correct':'no, not correct');


//var -> functional olage complete
// var age = 25 it appends to window object
// let and const -> block scope
// let age1 = 27 let will not effect



//localstorage and sessionstorage
localStorage.setItem("name","anu");

// sessionStorage.setItem("name","anushka");

//remove item
localStorage.removeItem("name")

const name = localStorage.getItem("name")
console.log(name);