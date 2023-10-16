// // // /Design a calculator interface for 2 number inputs which can perform sum,difference,product and dividend whenever invoked on the same interface
// // const calc12And5 = Calculator(12,5);
// // calc12And5.sum();
// // calc12And5.difference();
// // calc12And5.product();
// // calc12And5.dividend();
//
// function Calculator(num1,num2){
//     // let num1 = 12
//     // let num2 = 5
//     function sum(){
//         return num1 + num2;
//     }
//     function difference(){
//         return num1 - num2;
//     }
//     function product(){
//         return num1 * num2;
//     }
//     function dividend(){
//         return Math.floor(num1 / num2);
//     }
//     return {sum,difference,product,dividend};
// }


// //Design a private counter function which exposes increment and retrive functionalities
// function privateCounter(){
//     var count = 0;
//     return {
//         increment: function(val = 1){
//             count += val;
//         },
//         retrieve: function(){
//             return count;
//         }
//     }
// }
//
// //driver code
// const counter = privateCounter();
// counter.increment();
// counter.increment();
// counter.retrieve();
// counter.increment(5);
// counter.increment();
// counter.retrieve();

// //Write a polyfill for bind function
// // - The bind method creates a new function that when called,has it's this keyword set to the provided context
// if(!Function.prototype.bind){
//     Function.prototype.bind = function (context){
//         var fn = this;
//         var fnArgs = Array.prototype.slice.call(arguments,1);
//
//         return function (){
//             var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments))
//             fn.apply(context,allArgs);
//         }
//     }
// }

// //Write a function that will create a function bounded to the context like bind,but can be overriden when the context is set explicitly
// function softBind(fn,context){
//     var fnArgs = Array.prototype.slice.call(arguments,2);
//
//     return function(){
//         var allArgs = fnArgs.concat(Array.prototype.slice.call(arguments));
//
//         //override the context to incoming context if it is not undefined, null or window
//         var finalContext = (!this || this === window) ? context : this;
//         fn.apply(finalContext,allArgs);
//     };
// }

// //Write a function which helps to achieve multiply(a)(b)and returns product of a and b
// multiply(2)(4);
// multiply(5)(3);
//
// function multiply(num1){
//     return function (num2){
//         return num1 * num2
//     }
// }

//Create a function that takes another function as an argument and makes it eligible for currying or partial application
   //Function can take another function as argument and accept the arguments on the returned function till the expected arguments are reached
   //The arguments can be 1 or multiple, and the actual function will be called once the count of the expected arguments are reached
// function curryFunc(fn){
//     return function curry(...args){
//         if(fn.length <= args.length){
//         return fn.apply(this,args);
//     } else {
//             return function (...args2) {
//                 return curry.apply(this, args.concat(args2));
//             }
//         }
//     }
// }
//
// //driver code
// let sum = curryFunc(function (a,b,c,d) {
//     return a + b + c + d;
// });
//
// sum (1)(2)(3)(4);
// sum (1,2)(3,4);

//Design a function that helps you do debouncing
   //The debounce function forces a function to wait a certain amount of time before running again
   //The function is build to limit the number of function calls to improve perfomance
   //Debounce function design can take function (to be debounced),delay and optional context

// function debounce(fn,delay,context){
//     let timer;
//
//     return function(...args){
//         if(timer) clearTimeout(timer);
//
//         context = this ?? context;
//         timer = setTimeout(()=>{
//             fn.apply(context,args);
//         },delay);
//     }
// }


//Designing a function that helps to do throttling
  //The throttling function forces a function to run once in an amount of time for one or multiple calls
  //The function is build to limit the number of function calls to improve the performance
  //Throttling function design can take function (to be throttled),delay and the optional context
function throttle(fn,delay,context){
    let timer;
    let lastArgs;

    return function(...args){
        lastArgs = args;
        context = this ?? context;

        if(timer) return;
        timer = setTimeout(()=>{
            fn.apply(context,lastArgs);
            clearTimeout(timer);
        },delay);
    };
}