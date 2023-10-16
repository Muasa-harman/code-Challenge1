// Check if property exists in object

//Write a fuction that takes an object (a) and a string (b) as argument
//Return true if the object has a property with key 'b'
//Return false otherwise
//Hint: test case 3 is a bit tricky because the value of property 'z' is undefined
//But the property itself exists

function myFunction(a,b){

    return
}

console.log(myFunction(1,2,3),'b') //true
console.log(myFunction({x:'a',y:'b',z:'c'},'a')) //false
console.log(myFunction({x:'a',y:'b',z:undefined},'z') //true

//Get first n characters of string

//Write a function that takes a string (a) as an argument
//Get the first 3 characters of a
//Return the result
function myFunction(a){

    return
}

console.log(myFunction('abcdefg')) //'abc'
console.log(myFunction('1234')) //'123'
console.log(myFunction('fgedcba')) //fge

//Get last n characters of string

//Write a function that takes a string as argument
//Extract the last 3 characters from the string
//Return the result

function myFunction(str){

    return
}

console.log(myFunction('abcdefg')) //''efg
console.log(myFunction('1234')) //'234'
console.log(myFunction('fgedcba')) //'cba'

// Get nth element of array
// Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

// NB:In order to get the nth element of a given array, you have to know its index.
//     An index describes the position of an element in a given array.
//     Javascript arrays are zero-indexed. This means that the first element of an array has index 0.
// The second element has index 1 and so on.
function myFunction(arr,n){

    return
}
console.log(myFunction([1,2,3,4,5],3)) //3
console.log(myFunction([10,9,8,7,6],5)) // 6
console.log(myFunction([7,2,1,6,3],1)) //7

// Remove first n elements of an array
//Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'.Return the result
function myFunction(a){

    return
}
console.log(myFunction([1,2,3,4])) //[4]
console.log(myFunction([5,4,3,2,1,0])) //[2,1,0]
console.log(myFunction([99,1,1])) //[]

// NB:The slice operator takes two optional parameters (start, end).
//     You can use these parameters to define a range of elements that you want to keep from the original array.
//     Consider the following array:
//     const arr = [0,1,2,3,4];
// If we would want to have a new array that only has the third and the fourth element of arr, we would call:
//     arr.slice(2,4);
// // output: [2,3]

// Get last n elements of an array
// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
function myFunction(arr){

    return
}
console.log(myFunction([1,2,3,4])) //[2,3,4]
console.log(myFunction([5,4,3,2,1,0])) //[2,1,0]
console.log(myFunction([99,1,1])) //[99,1,1]

// Get first n elements of an array
// Write a function that takes an array(a) as argument.
// Extract the first 3 elements of a. Return the resulting array

function myFunction(a){
    return
}

console.log(myFunction([1,2,3,4])) //[1,2,3]
console.log(myFunction([5,4,3,2,1,0])) //[5,4,3]
console.log(myFunction[99,1,1]) //[99,1,1]

// Remove a specific array element
//Write a function that takes an array (a) and value(b) as argument.
// The function should remove all elements equal to 'b' from the array. Return the filtered array.

// NB:To remove all elements in an array that have a specific value, we will use the array.filter method.
//     This method is used to filter array elements based on certain conditions. This can be applied to our problem.
//     The array.filter method is called with a function that is applied to each element of the array.
//     In order to keep an element, the function must return true. In order to remove it,
//     the function must return false.
//     In the following example, we apply the array.
//     filter method to an array. As parameter, we pass a function that always returns true.
//     Therefore, no filtering is taking place. This returns a new array with all the elements of the original array:

    function myFunction (a,b){

    return
}
console.log(myFunction([1,2,3],2)) //[1,3]
console.log(myFunction([1,2,'2'],'2')) //[1,2]
console.log(myFunction[false,'2',1],false) //['2',1]
console.log(myFunction([1,2,'2',1],1)) //[2,'2']

// Check if all array elements are equal
//Write a function that takes an array as argument. It should return true if all elements in the array are equal.
//It should return false otherwise

function myFunction(arr){

    return
}
console.log(myFunction([true,true,true,true])) //true
console.log(myFunction(['test','test','test'])) //true
console.log(myFunction([1,1,1,2])) //false
console.log(myFunction(['10',10,10,10])) //false

// Return the average of an array of numbers
//Write a function that takes an array of numbers as argument.It should return average of thr numbers

// NB:The average of an array of numbers is the sum of all numbers divided by the length of the array
// (i.e. the number of elements).
// So, in order to solve this challenge, you need to know how to get the number of elements in
// an array and how to get the sum of those elements. We have covered those topics in the following challenges:
//     Count number of elements in JavaScript array
// Calculate the sum of an array of numbers
// Combine the code of these challenges to solve the current one.
function myFunction(arr){

    return
}
console.log(myFunction([10,100,40])) //50
console.log(myFunction([10,100,1000])) //370
console.log(myFunction([-50,0,50,200])) //50

// Return the longest string from an array of strings
//Write a function that takes an array of strings as argument. Return the longest string
function myFunction (arr){

    return
}
console.log('help','me') //'help'
console.log(['I','need','candy']) //'candy'


// Define an array with conditional elements

// Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array,
//     the first element should be either the given number itself or zero if the number is smaller than 6.
// The other elements should be the elements of the original array. Try not to mutate the original array
function myFunction(arr,arg){

    return arr
}

// Get every nth element of array
//Write a function that takes an array(a) and a value(n) as arguments. Save every nth element in a new array.
// value
//Return the new array

function myFunction(arr,n){

    return
}

// Group array of strings by first letter
// Write a function that takes an array of strings as argument. Group those strings by their letter.
//     Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only
// the corresponding strings. For example, the array ['Alf','Alice','Ben'] should be transformed to .{a:['Alf','Alice'],b:['Ben']}

function myFunction(arr){

    return
}

// Javascript Objects
// Accessing object properties one
//Write a function that takes an object with two properties as argument.
// It should return the property with key country
function myFunction(obj){

    return
}
console.log(myFunction({continent: 'Asia', country: 'Japan'})) //'Japan'
console.log(myFunction({country:'Sweden',continent:'Europe'})) //'Sweden'

// Convert array to object with counter
// Write a function that takes an array of numbers as argument. Convert the array to an object.
    // It should have a key for each unique value of the array
function myFunction(arr){

    return
}

// Add property to each object in array
// Write a function that takes an array of objects and astring as argument. App a property with key 'continent' and value
// equal to the string to each of the objects. Return the new array of objects. Hint: try not to mutate the original array
function myFunction(arr,str){

  return
}


// Check if two dates are equal
// Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments.
// It should return true if dates are equal. It should return false otherwise.
function myFunction(a,b){

    return
}
console.log(new Date('2000/01/01 08:00:00'),new Date('2000/01/01 08:45:00')) //false
console.log(new Date('2000/01/01 08:00:00'),new Date('2000.01/01 08:00:00')) //true
console.log(new Date('2001/01/01 08:00:00'),new Date('2000/01.01 08:00:00')) //false

// Return the number of days between two dates
// Write a function that takes two date instances as argument.
    // It should return the number of days that lies between those dates

function myFunction(a,b){

    return
}
console.log(new Date('2020-06-11'),new Date('2020-06-01')) //10
console.log(new Date('2000-01-01'),new Date('2020-06-01')) //7457

// Return the next nearest quarter hour of a date
//Write a function that takes a Date instance as argument. It should return the next nearest quarter hour in minutes.
// For example,if the given date has the time 10:01 the function should return 15

function myFunction(str){

    return
}

// Calculate difference between two dates in hours, minutes, and seconds
// This is a more difficult challenge. Write a function that takes two dates instances as argument. It should return an object with properties 'hrs','min','seconds.'
// The corresponding values should display the absolute difference between the two datres in hours,minutes,and seconds.
function myFunction (a,b){

    return
}

// Add n days to an existing date

// Write a function that takes as argument a date instance (a) and a number (b). It should add b days to a and
// return the number of milliseconds since January 1, 1970,)):00:00:00 UTC.
function myFunction(a,b){

    return
}

// Check if two dates are within 1 hour from each other
// Write a function that tskes two instances as argument.
    // It should return true if the differencce between the date is less than or equal to 1 hour.
    // It should return false otherwise
function myFunction (a,b){

    return
}
console.log(myFunction(new Date('2000/01/01 08:00:00'),new Date('2000/01/01 08:45:00'))) //true
console.log(myFunction(new Date('2000/01/01 09:00:00'),new Date('2000/01/01 08:45:00'))) //true
console.log(myFunction(new Date('2000/01/01 08:00:00'),new Date('2000/01/01 09:45:00'))) //false
console.log(myFunction(new Date('2000/01/01 08:00:00'),new Date('2000/01/01 09:00:00'))) //true


// Check if value is present in Set
// Write a function that takes a Set and a value as arguments. Check if the value is present in the Set
function myFunction(set,val){

    return
}
console.log(myFunction(new Set([1,2,3]),2)) //true
console.log(myFunction(new Set([123]),2)) //false
console.log(myFunction(new Set(['1','2','3']),'2')) //true
console.log(myFunction(new Set('123'),'2')) //true

// Get union of two sets
// Write a function that takes two Sets as arguments. Create the union of the two sets. Return the
// Hint: try not to switch to Arrays,this would slow your code
function myFunction (a,b){

    return
}
console.log(new Set('123'),new Set('234')) //new Set('1234')
console.log(new Set([1,2,3]),new Set([3,4,5])) //new Set([1,2,3,4,5])
console.log(new Set([false,false,NaN]), new Set([true,true,NaN])) //new Set([false,NanN,true])

// Add multiple elements to Set
// Write a function that takes a Set and an array as arguments.
    // If not already existing,add each element in the array to the Set.
    // Return the modified Set
function myFunction (set,arr){


    return
}

// Get Intersection of two Javascript Sets
//Write a function that takes two sets(a and b) arguments . Get the intersection of the sets. In other words,
//return a set containing all elements that are both in as well as b

// Get Intersection of two Javascript Sets
// Write a function that takes two sets (a and b) as arguments. Get the intersection of the sets. In other words,
// return a set containing all elements that are both in a as well as b
// function myFunction(a,b){
//
//     return
// }

// Delete element from Set
//Write a function that takes a Set and a value as argument. If existing in the set,remove the value the Set.
// Return the result
function myFunction(set,val){

    return
}
console.log(myFunction(new Set([1,2,3]),1)) //new Set([2,3])
console.log(myFunction(new Set('12345'),'3')) //new Set(['1','2','4','5'])
console.log(myFunction(new Set([1,2,3]),4)) //new Set([1,2,3])