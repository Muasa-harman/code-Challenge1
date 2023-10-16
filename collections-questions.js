//Write a function that can concatenate 2 arrays. If only one array is passed it will duplicate it
  //Function can take 2  arguments that concatenates arrays
  //2nd array parameter can be defaulted to 1st array if the value is not passed
function mergeArray(arr1,arr2 = arr1){
    return [...arr1,...arr2];
}

function mergeArray(arr1,arr2 = arr1){
    return arr1.concat(...arr2)
}
//
function mergeArray(arr1,arr2 = arr1){
    arr1.push(...arr2);
    return arr1
}

// //Write a program to replace 3 center elements of the 1st array by center 3 elements of the 2nd array
//   //slice method on array can be used to fetch the values of range in the array
//   //splice method on array can be used to replace the value of range in the array
//
// const a = [1,2,3,4,5];
// const b = [4,0,0,0,8];
//
// const startPositionFor1stArray = a.length / 2 - 1;
// const startPositionFor2ndArray = b.length / 2 - 1;
// a.splice(startPositionFor1stArray,3,...b.slice(startPositionFor2stArray,startPositionFor2ndArray + 3));


// //Sort the given array of integers in ascending or descending order
//  //Sort - method sorts the elements of an array in place and returns the sorted array
//  //It receives a function as an argument,which is used for comparison
// arr.sort((a,b)=> a -b );
// arr.sort((a,b)=> b - a);

//Write a code to generate an array with range of numbers and shuffle them
  //An array of numbers in the range can be generated from a function that can take start and end value of the range
  //The shuffling can be achieved simply by sorting the array using a function which randomly returns positive or negative numbers
  //The shuffling of the values can be also done by picking a value from a random index from the current array and moving it into a new array
function  rangeGenFunc(start = 1, end = 0){
    const arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr;
}
const arr = rangeGenFunc(1,10);
arr.sort(()=> 0.5 - Math.random());

function *  rangeGen(start=1,end = 0){
    for (let i = start; i <= end; i++){
        yield i;
    }
}

let arr = [...rangeGen(1,10)];
let shuffledArr= [];
const length = arr.length;
for(let i = 0; i< length; i++){
    shuffledArr.push(...arr.splice(Math.floor(Math.random() * arr.length),1));
}

console.log(shuffledArr)

// //Check if the user with name "John" exists in the array of the objects
// const doesJohnExist = arr.some((obj)=> obj.name === "John");
//
// const johnObject = arr.find((obj)=> obj.name === "John");
// const doesJohnExist = johnObject ? true : false;
//
// const johnIndex = arr.findIndex((obj)=>obj.name === "John");
// const doesJohnExist = johnIndex < 0 ? false : true;

//Write a program to calculate the sum of all the values of an array
  //Sum of the values of an array can be calculated by iterating and adding all the values of the array
  //reduce method of array can be used efficiently to calculate the sum with or without initial value
// const sum = arr.reduce((acc,value)=>acc + value, 0);
// const sum = arr.reduce((acc,value)=>acc + value);
//
// const sum = arr.reduce((acc,value)=> acc + value);
//
// const sum = 0;
// for(let value of arr){
//     sum = sum + value;
// }


//
// //Write a function that can convert the time input given in 12hrs format to 24hrs format
// convertTo24HrsFormat("12:10AM"); //00:10
// convertTo24HrsFormat("5:00AM"); //05:00
// convertTo24HrsFormat("12:33PM"); //12:33
// convertTo24HrsFormat("01:59PM"); //13:59
// convertTo24HrsFormat("11:8PM"); //23:08
// convertTo24HrsFormat("10:02PM"); //22:02
//
//  //The check for "AM" and "PM" can be verified using endsWith String method
//  //An extra 0 would be needed if the hours have single digit
//
function convertTo24HrsFormat(timeText){
    var timeTextLower = timeText.toLowerCase();
    let [hours,mins] = timeTextLower.split(":");

    //12 o clock is the special case to be handled both for AM and PM
    if(timeTextLower.endsWith("am"))
        hours = hours == 12 ? "0": hours;
    else if (timeTextLower.endsWith("pm"))
        hours = hours == 12 ? hours : String(+hours + 12);

    return hours.padStart(2, 0) + ":" + mins.slice(0,-2).padStart(2,0);

}

//Write a function that accepts a string argument and returns the count of characters between the first and last character 'x'
//    //Example
// getTheGapX('XeroX'); //4
// getTheGapX('Xamarin');  // -1 //if there
// getTheGapX('JavaScript');  //-1 //if there
// getTheGapX("F(X) !== G(X) !== F(X)");  //18
 //indexOf and lastIndexOf are the methods on String which returns
//the position of the given string in the input string from start and end respectively
  //If the match is not found,these methods return -1
function getTheGapX(str){
    if(!str.includes('X')){
        return -1
    }
    const firstIndeX = str.indexOf('X');
    const lastIndeX = str.lastIndexOf('X');
    return firstIndeX === lastIndeX ? -1 : lastIndeX - firstIndeX;
}

// //Write a function to truncate a string to a certain number of letters
//   //EXample
// truncateString("JavaScript", 7)    //"Java..."
// truncateString("JS is fun ",10)   //"JS is fun"
// truncateString("JS is Funny",10) //"JS is f"
//
// //Text can be truncated by fetching the substring from start till the count of characters
// //substr methods of string can be used to fetch the part of missing string
//
function truncateString(str, charCount) {
    if(str.length > charCount) {
        return str.substring(0,charCount - 3) + '...';
    } else {
        return str;
    }
}
//The typeof operator checks if a value has type of primitive type which can be
//one of boolean, function, object, number, string, undefined and symbol (ES6).

// const x = "Hello World";
// const y = new String("Hello World");
//
// typeof x; // returns 'string'
// typeof y; // returns 'object'

// The instanceof is a binary operator, accepting an object and a constructor.
//     It returns a boolean indicating whether or not the object has the given
// constructor in its prototype chain.
// const a = "Hello World";
// const b = new String("Hello World");
//
// a instanceof String; // returns false
// b instanceof String; // returns true