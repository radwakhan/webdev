// var a=10;
// console.log(a);
// console.log(window.a);
// console.log(this.a);
// console.log(window);
// console.log(this===window);
// // const , let ,var
// const value cannot change
//   if you want to change use let avoid using var
// const and let are blocked scope and var is function
//  scope.
{let d=10;
const b=20;
var c=30;
}
//  we can able to access c but not d and b
//  outside the block
// lexical scope- check variable scope if present in local scope then choose that otherwise check outer scope
// lexical dont work vice versa
function hello(){
    let x=10;
    console.log(x);
}
let x=100; //outerscope this x will be access inside the function
hello();
console.log(x);

// functions are called first class citizen
// function can assigned to variable, 
// can pass as argument to other function,
//  and store in data structures,
// can be returned from function.
// function add(a,b){ //here memory allocated to the function
//     return a+b;
// }

// let sum= function(a,b){ //here memory will allocated to variable
//     return a+b;
// }

// function operate(operationFunc,a,b){
//     return operationFunc(a,b);
// }
// console.log(operate(sum,4,5));

// higher order function- regular fun that 
// take function either as argument or return function

// different ways of writing a function
// arrow function

// let sum= (a,b)=>a-b;

// function being return from function
// function outer(){
//     let name = "mohit"
//     function inner(){
//         console.log(name);
//     }
//     return inner;
// }
// // let returnedfun=outer();
// // // console.log(returnedfun);
// // returnedfun();
// outer();

// console.log(add);
// console.log(add(2,3));
// var sum= function(a,b){
//     return a+b;
// }
// console.log(sum);
// console.log(sum(3,4));

//  function passed into another function


function outer(){
let count=0;
function inner(){
    count++;
    console.log(count);
}
return inner;
}
let counter=outer();
console.log(counter);
// closure- function with lexical scope
