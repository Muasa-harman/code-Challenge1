// Create a function that takes two numbers as arguments and returns their sum
function addition(a,b) {
    sum(a + b){
        return sum
    }

}
console.log(addition(3,2)) //5
console.log(addition(-3,-6)) //-9
console.log(addition(7,3)) //10

//Convert minutes to seconds

// //Write a function that takes an integer minutes and converts it to seconds.
// function converter(m){
//     seconds = 5*60{
//         return seconds
//     }
// }
console.log(seconds(5)) //300
console.log(seconds) //180
console.log(seconds) //120

// //Return the Next Number from the Integer Passed
//   //Create a function that takes a number as an argument,increments the number by +1 and returns the result.
function nextNumber(n){
    for (let i = 1; 1>i; i++){
        return result = result
    }
}

console.log(result(0)) //1
console.log(result(9)) //10
console.log(result(-3)) //-2

// //Area of a triangle
// //Write a function that takes the base and height of a triangle and return its area
function areaTriangle(b,h){
    area = Math.floor(base * height) / 2

}

console.log(areaTriangle(3,2)) //3
console.log(areaTriangle(7,4)) //14
console.log(areaTriangle(10,10)) //50

// //Convert Age to Days
//  //Create a function that takes the age in years and return the age in days
function ageConverter(age){
    let age = age * 365
}

console.log(ageConverter(65)) // 237225
console.log(ageConverter(0)) //0
console.log(ageConverter(20)) //7300

// //Buggy Code(Part 1)
// //Fix the code tab to pass this challenges(only syntax errors).
// //Look at the example below to get an idea of what function should do
//
function buggyCode(cube){

}

console.log(buggyCode(3)) // 27
console.log(buggyCode(5)) //125
console.log(buggyCode(10)) //1000

// //Return the First Element in an Array
//  //Create a function that takes an array containing only numbers and return the first element
function getFirstValue(arr){

}

console.log(getFirstValue([1,2,3])) //1
console.log(getFirstValue([80,5,100])) //80
console.log(getFirstValue([-500,0,50])) //-500

// //Less than 100
// //Given two numbers,return true if the sum of both numbers is less than 100. Otherwise return false
function lessThan100(a,b){

}

console.log(lessThan100(22,15)) //true
console.log(lessThan100(83,34)) //true

//Medium
//A Redundant Function
// //Write a function redundant that takes in a string str and returns a function that returns str
function redundantFunction(str){

}
const f1 = redundantFunction("apple")
console.log(f1()) //'apple'
const f2 = redundantFunction("pear")
console.log(f2()) //'pear'
const f3 = redundantFunction("")
//
console.log(f3()) //""

// //Tile Teamwork Tactics
// //In a board game,a piece mat advance 1-6 tiles forward depending on the number rolled on six-sided die.
// // If you advance your piece onto the same tile as another player's piece,both of you earn a bonus.
//
// //Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your
// // friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
function possibleBonus(a,b){

}
console.log(possibleBonus(3,7)) // true
console.log(possibleBonus(1,9)) // false
console.log(possibleBonus(5,3)) //false

//Write a function that takes a number and returns the perimeter of either a circle or a square.
//The input will be in the form(letter l,number num) where the letter will be either "s" for square,or "c" for circle,
// and the number will be the side of the square or the radius of the circle

//Use the following formulas:
//Perimeter of a square: 4 * side
//Perimeter of a circle: 6.28 * radius

//The catch is you can only use arithmetic or comparison operators,which means:
 //No if...else statements.
 //No objects.
 //No arrays.
 //No formatting methods,etc

// //The goal is to write a short,branch-free piece of code
function Perimeter(l,num){

}
console.log(Perimeter('s',7)) //28
console.log(Perimeter("c",4)) // 25.12
console.log(Perimeter("c",9)) //56.52

// //Find Number of Digits in Number
// //Create a function that will return an integer number
// //corresponding to the amount of digits in the given integer num.
function num_of_digits(num){

}

console.log(num_of_digits(1000)) //4
console.log(num_of_digits(12)) //2
console.log(num_of_digits(1305981031)) //10
console.log(num_of_digits(0)) //1

//Derivative of a Function
//Create a function that takes numbers b and m as arguments and returns
// the derivative of the function f(x)=x^b with respect to x evaluated at x=m,where b and m are constants
function Derivative(b,m){

}
console.log(Derivative(1,4)) //1
console.log(Derivative(3,-2)) //12
console.log(Derivative(4,-3)) //-108

//Burglary Series(04):Add its Name
//Given three arguments - an object obj of the stolen items,the pet's name and a
// value - return an object with that name and value in it(as key-value pairs)
function addName(obj,name,value){

}
console.log(addName({},"",300)) //{Brutus: 300}
console.log(addName({piano:500},"Brutus",400)) //{piano:500,Brutus:400}
console.log(addName({piano:500,stereo:300},"Caligula",440)) //{piano: 500,stereo:300,Caligula:440}

//Find the nth and Tetrahedral Number
//A tetrahedron is a pyramid with a triangular base and three sides.
// A tetrahedral number is a number ot items within tetrahedron.
//Create a function that take an integer n and returns the n-th tetrahedral number
function tetra(n){

}
console.log(tetra(2)) //4
console.log(tetra(5)) //35
console.log(tetra(6)) //56

//Which generation are you
//Try finding your ancestors and offsprings with code

//Create a function that takes a number x and a character y ("m" for male, "f" for female),and
// returns the name of an ancestor(m/f) or descendant (m.f).
 //If the number is negative,return the ralated ancestor.
 //If positive,return the related descendant
 //You are generation 0. In the case of 0 (male or female),return "me!".
//"daughter"

//Function Factory
//Create a function that takes a "base number" as an argument. This function should return another function
// which takes a new argument,and returns the sum of the "base number" and the new argument
// Please check the examples below for a clearer representation of the behavior expected.

//Example
 // Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it

//const plusFive = makePlusFunction(5)

//plusFive(2) -> 7
//plusFive(-8) -> -3

//Calling makePlusFunction(10) returns a new function that
// and returns the results when adding 10 to it

//plusTen(0) -> 10
//plusTen(188) -> 198
//plusFive(plusTen(0)) -> 15

//Converting Objects to Arrays
//Write a function that converts an object into an array,where each element represents a key-value pair
// in the form of an array
function toArray(a,b,obj){

}
console.log(toArray(1,2)) //[["a",1],["b",2]]
console.log(toArray(shrimp:15, tots:12)) [["shrimp",15],["tots",12]]
console.log(toArray({}) //[]

//Hard
//Seven Boom!

//Create a function that takes an array of numbers and returns "Boom!" if the digit 7 appears in the array.
// Otherwise,return "there is no 7 in the array"
//
function sevenBoom(arr){

}

//Examples
console.log(sevenBoom([1,2,3,4,5,6,7])) //"Boom!"
7 contains the number seven
console.log(sevenBoom([8,6,33,100])) //"there is no 7 in the array"
// None of the items Contain 7 within them
console.log(sevenBoom([2,55,60,97,86])) //"Boom// "
// 97 Contains the number seven

//Tower of Hanoi
//There are three towers. The objective of the game is to move all the diskd over to tower #3,
//but you cant place a larger disk onto a smaller disk. To play the game or learn more about the tower of Hanoi,

//Create a function that takes a number discs as an argument and return the minimum amount of steps needed to complete the game
function towerHanoi(n){

}

console.log(towerHanoi(3)) //7
console.log(towerHanoi(5)) //31
console.log(towerHanoi(0)) //0

//Number of Boomerangs
//A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as
// :sub-array of length 3,with the first and last digits being the same and the middle digit being different
 //Some boomerang examples:
//[3,7,3], [1,-1,1], [5,6,5]

//Create a function that returns the total number of boomerangs in the array
  //To illustrate:
//[3,7,3,2,1,5,1,2,2,-2,2]
 //3 boomerangs in this sequence: [3,7,3], [1,5,1], [2,-2,2]
//Beware that boomerangc can overlap,like so:
 //[1,7,1,7,1,7,1]
   //5 boomerangs (from the left to right) : [1,7,1],[7,1,7],[7,1,7],[7,1,7], and [1,7,1]
function countBoomerangs(arr){

}
console.log(countBoomerangs([9,5,9,5,1,1,1])) // 2
console.log(countBoomerangs([5,6,6,7,6,3,9])) //1
console.log(countBoomerangs([4,4,4,9,9,9,9])) //0

//Pronic Number
//A pronic number(or otherwise called as heteromecic) is a number which is a product of two consecutive inntegers,that
// is, a number of the form n(n + 1). Create function that determines whether a number is pronic or not

function isHeteromecic(n){

}
//
console.log(isHeteromecic(0)) //true
//0 * (0 + 1) = 0 * 1 = 0
console.log(isHeteromecic(2)) //true
//1 * (1 + 1) = 1 * 2 = 2
console.log(isHeteromecic(7)) //false

console.log(isHeteromecic(110)) // true
//10 * (10 + 1) = 10 * 11 = 110
console.log(isHeteromecic(136)) //true

console.log(isHeteromecic(156)) //true


//*Oddish vs. Evenish*//
//create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all
// its digits is odd,a number is Evenish if the sum of all its digits is even. If a number is Oddish, return "Oddish" .
//Otherwise, return "Evenish".

//For example, oddishOrEvenish(121) should return "Evenish",since 1 + 2 + 1 = 4.
//oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

function oddishOrEvenish(n){

}

console.log(oddishOrEvenish(43)) // "Oddish"
//4 + 3 = 7
//7 % 2 = 1

console.log(oddishOrEvenish((373)))  //"Oddish"
//3+7+3 = 13
//13 % 2 = 1

console.log(oddishOrEvenish(4433)) //"Evenish"
//4 + 4 + 3 + 3 = 14
//14 % 2 = 0

//How many days between two dates
//Create a function that takes two dates and returns the number of days between the first and second date
function getDays(d1,d2){

}

console.log(getDays("June 14,2019","June 20,2019")) //6
console.log(getDays("December 29,2018","January 1, 2019")) //3
console.log(getDays("July 20, 2019","July 30, 2019")) //10

//Length of a Nested Array
//The .length property on an array will retun the number of elements in the array.
// For example,the array below contains 2 elements:

//[1,[2,3]]
//2 elements,number 1 and array [2,3]

//Suppose weinstead wanted to know the total number of non-nested items in the nested array. In the above
// case,[1,[2,3]] contains 3 non-nested items,1,2 and 3. Write a function that returns total number of
// non-nested items in a nested array
function getLength(arr){

}

console.log(getLength([1,[2,3]])) //3
console.log(getLength([1,[2,[3,4]]])) //4
console.log(getLength([1,[2,[4,[5,6]]]])) //6
console.log(getLength([1,[2],1,[2],1])) //5


//Find the Value in a Binary Tree
//An Array that represents a Binary Tree is in the following form:

//binaryTree = [val,arrLeft,arrRight]
//when arrLeft is the left side of the tree and arrRight is the right side of the tree

//Create a function that takes an array that represent a Binary Tree and a value and returns true if
// the value is in the tree and,false otherwise
function binaryTree(tree,val){

}

console.log(binaryTree(arr1,5)) //true
console.log(binaryTree(arr1,9)) //false
console.log(binaryTree(arr,51)) //false


//Numbers in Strings
//Create a function that an array of strings and returns an array with only the strings that have numbers in them.
// If there are no strings containing numbers, return the empty array
function numInStr(arr){

}

console.log(numInStr(["1a","a","2b","b"])) //["1a","2b"]
console.log(numInStr(["abc","abc10"])) //["abc10"]
console.log(numInStr(["abc","ab10c","a10bc","bcd"])) //["ab10c","a10bc"]
console.log(numInStr(["this is a test","test1"])) //[test1]

//Combination
//Create a function that takes a variable number of arguments,each argument representing the number of items in
// a group. The function should return number of permutations (combinations) of choices you would have if you
// selected one item from each group.
function combinations(arg){

}

console.log(combinations(2,3)) //6
console.log(combinations(3,7,4)) //84
console.log(combinations(2,3,4,5)) //120

//Up the Hill,Down the Hill
//If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path at 60mph then their
// average speed traveled was 30mph.
//Write a function that returns the average speed traveled given an upphill time,uphill rate and downhill rate.
//Uphill time in minutes. Return the rate as an integer (mph). No rounding is necessary

function averageSpeed(upTime,upSpd,downSpd){

}

console.log(averageSpeed(18,20,60)) //30
console.log(averageSpeed(30,10,30)) //15
console.log(averageSpeed(30,8,24)) //12

//Positive Dominant
//An array is positive dominant if it contains strictly more unique positive values than unique negative values.
// Write a function that returns true if an array is positive dominant
function isPositiveDominant(arr){

}

console.log(isPositiveDominant([1,1,1,1,-3,-4])) //false
 There is only 1 unique positive value(1)
 There are 2 unique negative values (-3,-4).

console.log(isPositiveDominant([5,99,832,-3,-4])) //true
console.log(isPositiveDominant([5,0])) //true
console.log(isPositiveDominant([0,-4.-1])) //false

//very hard javascript challenges
//Track the robot
//This robot roams around a 2D grid. It starts at (0,0) facing north. Each time it moves,
the robot rotates 90 degrees clockwise.Given the amount the robot has moved each time you have to calculte the robot's ifnal position
  To illustrate, if the robot is given the movement 20,30,10,40 then it will move:
.20 steps North,now at (0,20)
.30 steps East, now at (30,20)
.10 steps South, now at (-10,10)
40 steps West,now at (-10,10)

//... and will end up at coordinates(-10,10)
function trackRobot(){

}
console.log(trackRobot(20,30,10,40)) //[-10,10]
console.log(trackRobot()) //[0.0]
//No movement so the robot stays at (0,0)
console.log(trackRobot(-10,20,10))  //[20,-20]

//Even vs. Odds
//Odd numbers like to hangout with odd numbers. Even numbers like to hangout with even numbers.
//A spot is an insertion between two numbers in an array. Given an array of n integers in length, there are n-1
// spots available

//For instance:

   // [3, 4, 9, 10, 1]  // Array of 5 digits can also be thought of as...

     //   [3, __ , 4, __ , 9, __, 10, __, 1]  // ...an array of 4 spots.
//After a number is newly inserted into a spot, it's left neighbor is the number directly to the left of it and it's right neighbor is the number directly to the right of it.

   // For instance:

  //  [3, 6, 4, 9, 10, 1]  // Left neighbor of 6 is 3, right neighbor of 6 is 4.
//Odd numbers like having the following (left neighbor, right neighbor combinations): (odd, even), (even, odd), (odd, odd) .They dislike having both neighbors being even, or (even, even).

   // Similarly, even numbers like the following neighbor combinations: (even, odd), (odd, even), (even, even). They dislike having both neighbors being odd, or (odd, odd).

  //  Given an array, calculate the number of liked spots.
function availableSpots(arr,num){

}
console.log(availableSpots([0,4,6,8],9)) //0
//9 likes NONE of the following spots: [0,_,4],[4,_,6],[6,_,8] b/c all his neighbors are even

console.log(availableSpots([0,4,6,8],12)) //3
//12 likes ALL of the spots
console.log(availableSpots([4,4],8)) //1
//7 dislikes every spot except the last one at: [4,_,5]


// //Does the Triangle Fit into the Triangular Hole
// //Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one
function doesTriangleFit(brick,hole){

}
console.log(doesTriangleFit([1,1,1],[1,1,1])) //true
console.log(doesTriangleFit([1,1,1],[2,2,2])) //true
console.log(doesTriangleFit([1,2,3],[1,2,2])) //true
console.log(doesTriangleFit([1,2,4],[1,2,6])) //true

//Content Analyzer
//Create a function that takes string and returns an object. The returned object will have a common property for all detected
// type content named contentType the possible values for this property are "HTML","CSS","TEXT".
//Your function should be able to detect HTML and CSS else it's just TEXT
//If you detect HTML the returned object will have a special property name "tags". "tags" is an object with all
// content tags name and how many times these tags were called in content
//If you don't detect HTML or CSS,the content is detected as TEXT and object will have a special property named lineNumber
function analyzeContent(content){
    var result = {contentType: ""}
    return result;
}

console.log(analyzeContent("this is a test\nSeems to work")) //{contentType: "TEXT",lineNumber:2}
console.log(analyzeContent("body{blabla} a{color:#fff} a{padding:0}")) //{contentType: "CSS",cssTargets:{body:1,a:2}}
console.log(analyzeContent("<html><div></div><div></div></html>")) //{contentTpye:"HTML",tags: {html: 1,div:2}}

//Get Notes Distribution
//Create a function that takes an array of students and return an object representing their notes distribution.
// Keep in mind all invalid notes should not be counted in the didtribution. Valid notes are: 1,2,3,4,5

function getNotesDistribution(student){

}
console.log(getNotesDistribution([{"name":"Steve",
"notes":[5,5,3,-1,6]
},
    {
        "name":"Jonh",
        "notes":[3,2,5,0,-3]
    }
])) //{5:3,3:2,2:1}

//Working 9 to 5
// Write function that calculates overtime and pay associated with overtime.
//   Working 9 to 5: regular hours
//   After 5pm is overtime
// Your function gets an array with 4 values:
//   Start of working day,in decimal format,(24-hour day notation)
//   End of working day.(Same format)
//  Hourly rate
//  Overtime multiplier
// Your function should spit out:
//  $ + earned that day (rounded to the nearest nundreth)
function overTime(arr){

}
console.log(overTime([9,17,30,1.5])) //"240.00"
console.log(overTime([16,18,30,1.8])) //"84.00"
console.log(overTime([13.25,15,30,1.5])) //"$52.50"

//24-Hour Time
//Write a function that receives the time in 12-hour AM/PM format and returns a string representation off the time in military(24-hrs) format
function convertTime(str){


}
console.log(convertTime("07:05:45PM")) //"19:05:45"
console.log(convertTime("12:40:22")) //"00:40:22"
console.log(convertTime("12:45:54")) //"12:45:54"


// //Mutations Only: Zeroes to the End
// //Write a function that moves all tne zeroes to the end of an array. Do this without returning a
// // copy of the input array
function zeroesToEnd(arr){

}
console.log(zeroesToEnd([1,2,0,0,4,0,5])) //[1,2,4,5,0,0,0]
console.log(zeroesToEnd([0,0,2,0,5])) //[2,5,0,0,0]
console.log(zeroesToEnd([4,4,5])) //[4,4,5]
console.log(zeroesToEnd([0,0])) //[0,0]

//Persistence
//The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits
// until n becomes a single digit integer.
 //Create two functions that take an integer as an argument and:
//i.Return its additive persistence
//ii.Return its multiplicative persistence

// //Additive Persistence
function additivePersistence(n){

}
console.log(additivePersistence(1679583)) //3
//1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
//3 + 9 = 12
//1 + 2 = 3
//It takes 3 iterations to reach a single-digit number
console.log(additivePersistence(123456)) //2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
//2 + 1 = 3
console.log(additivePersistence(6)) //0
//Because 6 is already a single-digit integer

//Multiplicative Persistence
function multiplicativePersistence(n){

}
console.log(multiplicativePersistence(77)) //4
// 7 * 7 = 49
//4*9 = 36
//3*6 = 18
//1*8
// //It takes 4 iterations to reach a single-digit number
//
console.log(multiplicativePersistence(123456)) //2
//1 * 2 * 3 * 4 * 5 * 6 = 720
//7 * 2 * 0 = 0
console.log(multiplicativePersistence(4))
//Because 4 is already a single-digit integer

//Validating a Set in the Set Game
//In the game Set,three cards for a set if each of the cards are identical or completely different for each of the
// four properties. All three cards must:
//i.Have the same color or different colors
//ii.Have the same numbers or different numbers
//iii.Have the same shade or different shades
//iv.Have the same shape or different shapes

//The four properties are:
//1.Colors: red,purple,green
//2.Numbers:1,2,3
//3.Shades:empty,lined,full
//4.Shapes: squiggle,oval,diamond
//Here,a set is represented by an array containing three cards. Each card is represented
//by an object of properties and values. Write a function that determines whether three cards constitute a valid set
function  isSet(arr){

}
console.log(isSet([
    { color: "green", number: 1, shade: "empty", shape: "squiggle" },
    { color: "green", number: 2, shade: "empty", shape: "diamond" },
    { color: "green", number: 3, shade: "empty", shape: "oval" }
])) //true
console.log(isSet([
    { color: "purple", number: 1, shade: "full", shape: "oval" },
    { color: "green", number: 1, shade: "full", shape: "oval" },
    { color: "red", number: 1, shade: "full", shape: "oval" }
])) //true
console.log([
    { color: "purple", number: 3, shade: "full", shape: "oval" },
    { color: "green", number: 1, shade: "full", shape: "oval" },
    { color: "red", number: 3, shade: "full", shape: "oval" }
]) //false

//Ungroup Data in an Object
//You volunteered to help out teaching a preschool in your area! You were given an array of all students and
// some important data about them,grouped by their teacher. Create a function that will ungroup every student
// so you can look at their details individually
function ungroupStudents(arr){

}

console.log(ungroupStudents([{
    teacher: "Ms. Car",
    data: [{
        name:"Jame",
        emergencyNumber: "617-771-1082",
    },
        {
            name:"Alice",
            alergies:["nuts","carrots"],
        }],
},{
    teacher: "Mr. Lamb",
    data: [{
        name:"Aaron",
        age:3
    }]
 }]))
[{
teacher: "Ms. Car",
    name: "James",
    emergencyNumber: "617-771-1082",
}, {
    teacher: "Ms. Car",
        name: "Alice",
        alergies: ["nuts", "carrots"],
}, {
    teacher: "Mr. Lamb",
        name: "Aaron",
        age: 3,
}]

//Splitting Objects Inside an Array
//You bought a few bunches of fruit over the weekend.
//Create a function that splits a bunch into a singular objects inside an array

function splitBunches(bunches){
  bunches.reduce((a,b)=>{
      for (let i = 0; i < b.quantity; i++){
          a.push({...b,quantity: 1});
      }
         return a;
  },[]);
}
console.log(splitBunches([
    { name: "grapes", quantity: 2 }
]))  //[{ name: "grapes", quantity: 1 },{ name: "grapes", quantity: 1 }]

console.log(splitBunches([
    { name: "currants", quantity: 1 },
    { name: "grapes", quantity: 2 },
    { name: "bananas", quantity: 2 }
 ]))  //➞ [{ name: "currants", quantity: 1},{ name: "grapes", quantity: 1 },{ name: "grapes", quantity: 1 },{ name: "bananas", quantity: 1 },{ name: "bananas", quantity: 1 }
// // ]


//Cleaning Project Files
//You are in the midst of organizing all of your coding projects. It's a mess! Every file you've ever created is
// located in the same folder
//To clean it up,you've decided that you will use one of two organization methods.
//i.The prefix method. You will group all files with the same project name under the same folder
//ii.The suffix method. You will group all files with the same extension under the same folder.
//Create a function that takes in the current folder sorts the files according to the organization method (prefix or suffix).
// A folder is a grouping of files in the same array.
function cleanUp(files,sort){
  let obj = {}
    files.map(x=> {
        let [a,b] = x.split(".")
        if (sort === "suffix") obj[b] = [...(obj[b] || []),x]
        else obj[a] =[...(obj[a] || []),x]
    })
    return Object.values(obj)
}
console.log(cleanUp(["ex1.html","ex1.js","ex2.html","ex2.js"],"prefix")) //[["ex.html","ex1.js"],["ex.html","ex2.js"]]
console.log(cleanUp(["ex1.html","ex1.js","ex2.html","ex2.js"],"suffix")) //[["ex1.html","ex1.js","ex2.html","ex2.js"],"suffix"] //[["ex1.html","ex2.html","ex.js"]]
console.log(cleanUp(["music_app.js", "music_app.png", "music_app.wav","tetris.png",
    ["tetris.png", "tetris.js"]]))
console.log(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix"))  // [["_1.rb", "_2.rb", "_3.rb", "_4.rb"]]
console.log(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix"))  // [["_1.rb"], ["_2.rb"],["_3.rb"], ["_4.rb"]


//Sexagenary Cycle (Chinese Zodiac)
//In early recorded Chinese history, time was reckoned using the sexagenary (60-years) Cycle, generated from two subcycles:
//i.Five heavenly stems(elements) in this order:wood,fire,earth,metal,water. The stems change every two years.
//ii.Twelve earthly branches (animals) in this order: rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog, pig. The branches change yearly
// The combinations between these two sub-cycles result in a 60-year cycle where no two years are the same — for example, the 5 years of the Rat have 5 different elements: 1924 Wood Rat, 1936 Fire Rat, 1948 Earth Rat, 1960 Metal Rat, 1972 Water Rat.
//
//     The first 14 years of the current cycle are shown in the table below:
//
//     Gregorian Year	Stem	Branch
// 1984	Wood	Rat
// 1985	Wood	Ox
// 1986	Fire	Tiger
// 1987	Fire	Rabbit
// 1988	Earth	Dragon
// 1989	Earth	Snake
// 1990	Metal	Horse
// 1991	Metal	Sheep
// 1992	Water	Monkey
// 1993	Water	Rooster
// 1994	Wood	Dog
// 1995	Wood	Pig
// 1996	Fire	Rat
// 1997	Fire	Ox
//These days,the sexagenary cycle is used mainly for historical celebration and events,and in Chinese astrology.
// The Gregorian calender is now the standard means of reckoning time.
//Create a function that takes a number representing a year in the Gregorian calender, and returns a string consisting
//of the corresponding stem-and-branch combination in the sexagenary cycle.
// function sexagenary(year){
//   let stem = ["Metal", "Water", "Wood", "Fire", "Earth"];
//   let branch = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
//     return stem[Math.floor((year%10)/2)] + " " + branch[year%12];
// }
// console.log(sexagenary(1971)) //"Metal Pig"
// console.log(sexagenary(1927)) //"Fire Rabbit"
// console.log(sexagenary(1974)) //"Wood Tiger"
// console.log(sexagenary(1997))
// console.log(sexagenary(1987))


// //Product of Digits of Sum
// //Create a function that takes two one,two or more numbers as arguments and adds them together to get a new number.
// // The function then repeatedly multiplies the digits of the new number by each other,yielding a new number, until the
// // product is only 1 digit long. Return the final product
function sumDigProd(...args){
    let n = args.reduce((a,v)=> a + v, 0);
    while (n > 9) {n = [...'' + n].reduce((a,v)=>a * +v, 1)}
    return n;

}
console.log(sumDigProd(16,28)) //6
//16 + 28 = 44
//4 * 4 = 16
//1 * 6 = 6
console.log(sumDigProd(0)) //0
console.log(sumDigProd(1,2,3,4,5,6)) //2

//Find the Lowest Neighbor of a 2D Array Element
//Create a function that returns the lowest neighbor of a given (x, y) coordinate elements in a 2D array. The
//function will be passed three parameters
//arr,x, y
 //arr will be a 2D array holding integer values and will be symmetrical in size (e.g 2x2, 3x3, 4x4).
// x will hold the row coordinates,while y will hold the column coordinate
//You will have to check the horizontal,vertical and diagonal neighbor elements . If there isn't any lower neighbors ,
//return the value of the given (x, y) coordinate
function lowestElement(arr, y, x){
  let lowest = Infinity;
  for(let i = Math.max(y - 1, 0); i <= Math.min(y + 1, arr.length - 1 ); i++)
      for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, arr.length - 1); j++)
          if(lowest > arr[i][j])
              lowest = arr[i] [j];
  return lowest;
}
console.log(lowestElement([1,2,3],[4,5,6],[7,8,9])) //1
console.log(lowestElement([9,8,7],[0,-1,-3],[-5,-9,54]))

//Diagonal Matrices
// Write function that diagonally orders nunmbers in a n x n matrix,depending on which of the four corners you
// originate from : upper-left(ul),upper-right(ur),lower-left(ll),lower-right(lr)
function diagonalize(n, dir){

}
console.log(diagonalize(3,"ul")) //[[0,1,2],[1,2,3],[2,3,4]]
console.log(diagonalize(4,"ur")) //[3,2,1,0],[4,3,2,1],[5,4,3,2],[6,5,4,3]
console.log(diagonalize(3,"ll")) //[2,3,4],[1,2,3],[0,1,2]
console.log(diagonalize(5,"lr")) //[8,7,6,5,4],[7,6,5,4,3],[5,4,3,2,1],[4,3,2,1,0]

//Headline Hash Tags
//Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags.
// If multiple words tie for the same length,retrieve the word that occurs first.
function getHashTags(str){

}
console.log(getHashTags("How the Acocado became the fruit of grobal Trade")) //["#avocado","#became","#global"]
console.log(getHashTags("Why You will Probably Pay More for Your Christmas Tree This")) //["#christmas","#probably","#will"]
console.log(getHashTags("Hey Parents, Surprise,Fruit Juice Is Not Fruit")) //["#surprise","#parents","#fruit"]
console.log(getHashTags("Visualizing Science")) //["#visualizing","#science"]

//Expert
//The Fiscal Code
//Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration:
// the Fiscal Code. Check the resources tab for more info on this.

//Given an object containing the personal data of a person(name ,username,gender and date of birth) return the 11 code characters as
// a string following these steps:
//Generate 3 capital letters from the surname,if it has:

  //At least 3 consonants then the first three consonants are used. (Newman -> NWM).
  // Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
  // Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).

//Generate 3 capital letters from the name,if it has:
  //Exactly 3 consonants then consonants are used in the order they are appear(Matt -> MTT)
  //More than 3 consonants then first,third and fourth consonants are used (Samantha -> SNT | Thomas -> )
  //Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA )
  //Less than three letters then "X" will take the third slot after the consonant and the vowel (Al -> LAX).

//Generate 2 numbers,1 letter and 2 numbers from date of birth and gender:
  //Take the last two digits of the year of birth (1985 -> 85)
  //Generate a letter corresponding to the month of birth (January -> A | December -> T) using table for conversion include in the code
  // For male take the day of birth adding one at the start if is less than 10(any 9th day -> 09 | any 20th day -> 20)
  // For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60)


//  const months = {1:"A",2:"B",3:"C",4:"D",5:"E",6:"F",7:"G",8:"H",9:"P",10:"R",11:"S",12:"T"}
function fiscalCode(person){
  let finalString = '';

  //Last name
    if (person.surname.length < 3) finalString += person.surname + "x";
    else {
        let con = [];
        let vou = [];

        for (let i = 0; i < person.surname.length; i++){
            if (vouls.includes(person.surname[i].toLowerCase())) vou.push(person.surname[i]);
            else push(person.surname[i]);
        }

        if (con.length > 2) finalString += con.slice(0,3).join("");
        else finalString += (con.join("") + vou.slice(0,3 - con.length ).join(""));


    }
    //First Name
     let con = [];
     let vou = [];

    for (let i = 0; i < person.name.length; i++){
        if (vouls.includes(person.name[i].toLowerCase())) vou.push(person.name[i]);
        else con.push(person.name[i]);
    }
    if (con.length + vou.length < 3) finalString += con.join("") + vou.join("") + "x";
    else if (con.length === 3) finalString += con.join("");
    else finalString += (con.join("") + vou.slice(0,3 - con.length).join(''));

    //DOB & Gender
    let aMeRiCanDatEfOrMat = person.dob.split("/"); //This is so dumb
    let dob = new Date(`${aMeRiCanDatEfOrMat[1]}/${aMeRiCanDatEfOrMat[0]}/${aMeRiCanDatEfOrMat[2]}`);

    finalString += dob.getFullYear().toString().slice(-2);
    finalString += months[`${dob.getMonth() + 1}`];
    finalString += person.gender == "M" ? `${dob.getDate() < 10 ? `0${dob.getDate()}` : dob.getDate()}` : `${dob.getDate() + 40}`;

    return finalString.toUpperCase();
  }

//Frequency by Level of Nesting
Create a function that takes in nested array and returns the frequency of that element by nested level
function freqCount(arr,el){
 const resultObj = {};
    const resultArray = []
    nestedCount(arr);
    for (let k in resultObj){
        resultArray.push([+k, +resultObj[k]]);
    }
    return resultArray;

    //Local function
    function nestedCount(arr,level = 0){
        resultObj[level] = resultObj[level] || 0;
        for (let i = 0; i < arr.length; i++){
            const currentElement = arr[i];
            if (Array.isArray(currentElement)) {
                nestedCount(currentElement,level+1);
                continue;
            }
            if (currentElement === el)
                ++resultObj[level];
        }
    }
}
console.log(freqCount([1,4,4,[1,1,[1,2,1,1]]],1))  //[[0,1],[1,2],[2,3]]
console.log(freqCount([1,5,5,[5,[1,2,1,1],5,5],5,[5]],5)) //[[0,3],[1,4],[2,0]]
console.log(freqCount([1,[2],1,[[2]],1,[[[[[2]]]]]],2)) //[[0,0],[1,1],[2,1],[3,1],[4,1]]


//Valid Name
//For this exercise,keep in mind definitions:
//i.A term is either an initial or word
//ii.initials = 1 character
//iii.words = 2 + characters(no dots allowed)


//A valid name is a name written in one of the following ways:
// H. Wells
// H. G. Wells
// Herbert G. Wells
// Herbert George Wells

// The following names are invalid
// Herbert or Wells (single names not allowed)
// H Wells or H. G Wells (initials must end with dot)
//     h. Wells or H. wells or h. g. Wells (incorrect capitalization)
// H. George Wells (middle name expanded, while first still left as initial)
// H. G. W. (last name is not a word)
// Herb. G. Wells (dot only allowed after initial, not word)

//Rules
// Both initials and words must be capitalized.
//     Initials must end with a dot.
//     A name must be either 2 or 3 terms long.
//     If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
//     The last name must be a word (not an initial).

//Your task is to write a function that determines whether a  name is valid or not. Return true
//if the name is valid,false otherwise
function validName(name) {
    nameArray = name.split(" ")
    if (nameArray.length === 1) {
        return false
    } else if (nameArray.length > 3) {
        return false
    } else if (nameArray.length === 2) {
        if (nameArray[0].length === 1) {
            return false
        }

        if (nameArray[0].split("")[0] === nameArray[0].split("")[0].toLowerCase()) {
            return false
        }
        if (nameArray[2].slice(-1) === ".") {
            return false
        }
        if (nameArray[0].slice(-1) !== nameArray[1].slice(-1) && nameArray[0].slice(-1) === ".") {
            return false
        }
    }
    return true
}
console.log(validName("H.Wells")) // true
console.log(validName("H. G. Wells")) //true
console.log(validName("Herbert G. Wells ")) //true
console.log(validName("Herbert")) // false
//Must be 2 or 3 words
console.log(validName("h Wells")) //false
//Incorrect capitalization
console.log(validName("H Wells")) //false
//Missing dot after initial
console.log(validName("H. George Wells")) //false
// Cannot have : initial first name + word middle name
console.log(validName("H George W.")) //false
//Last name cannot be initial
console.log(validName("Herb. George Wells")) //false
//Words cannot end with a dot only initial can


//Jake's Meal Time
//Jake is a very habitual person. He eats breakfast at 7:00 am each morning lunch at 12:00pm and dinner at
//7:00pm in the evening.
//Create a function that takes in current time as a string and determines the duration of time before Jake's next meal.
//Represent this as an array with the first and second elements representing hours and minutes,respectively
function timeToEat(currentTime){
  let [h,m,am] = currentTime.split(/[: ]/);
  [h,m] = [+h,+m];
  if (h === 12) {h -= 12;}
  if (am === "p.m.") {h += 12;}
  let time = 60*h + m;
  let r = [420,720,1140,1860].map(v => v - time).filter(v => v >= 0);
  r = Math.min(...r);
  return [~~(r/60), r % 60];
}

console.log(timeToEat("2:00 pm")) //[5,0]
//% hours until the next meal dinner
console.log(timeToEat("5:50 pm")) //[1,10]
//1 hour and 10 minutes until the next meal,breakfast

//Roman Numeral Converter
//Create a function that takes an Arabic number and converts it into a Roman number

// const lookup = {'M':1000,'CM':900,'D':500,'CD':400,'C':100,'XC':90,'L':50,'XL':40,'X':10,'IX':9,'V':5,'IV':4,'I':1};
function convertToRoman(num){
  let roman = '';
  for (i in lookup){
      while (num >= lookup[i]){
          roman += i;
          num -= lookup[i];
      }
  }
  return roman
}
 console.log(convertToRoman(2)) //"II"
console.log(convertToRoman(12)) //"XII"
console.log(convertToRoman(16)) //"XVI"
//

//Minimum Steps to Palindrome
//Given an incomplete palindrome as a string,return the minimum letters needed to be added on to the end to make the string a palindrome
function minpalindromeSteps(arr){
  if(palindrome(arr))
      return 0;
  arr = arr.substring(1);
  return 1 + minpalindromeSteps(arr)
}

function palindrome(str) {
    var len = str.length;
    var mid = Math.floor(len / 2);

    for (var i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(minpalindromeSteps("race")) //3
//Add 3 letters: "car" to make racecar
console.log(minpalindromeSteps("mada")) //1
//Add 1 letter : "m" to make "madam"
console.log(minpalindromeSteps("mirror")) //3
//Add 3 letters: "rim" to make "mirrorrim"


//Distance to the nearest vowel
//Write a function that takes in a string and for each character,returns the distance to the nearest vowel in the string..If the vowel is a string
//itself return 0
function distanceToNearestString(str){
  let index = str.search(/[aeiou]/);
  let distance = [];
  for (let i = 0; i < str.length; i++){
      if (str.slice(i).search(/[aeiou]/) != -1 &&
          Math.abs(index - i >= str.slice(i).search(/[aeiou]/) ) {
          index = str.slice(i).search(/[aeiou]/) + i;
      }
      distance.push(Math.abs(index - i));
  }
  return distance;
}
console.log(distanceToNearestString("aaaaa")) //[0,0,0,0,0]
console.log(distanceToNearestString("babbb")) //[1,0,1,2,3]
console.log(distanceToNearestString("abcdadcd")) //[0,1,2,1,0,1,2,3]
console.log(distanceToNearestString("shopper")) //[2,1,0,1,1,0,1]


//Ascending Consecutive Numbers
//Write a function that returns true if a string consist of ascending or ascending AND consecutive numbers
function ascending(str){

}
console.log(ascending("232425")) //true
//Consecutive numbers 23,24,25
console.log(ascending("2324256")) //false
//No matter how this string is divided
console.log(ascending("444445")) //true


// //Consecutive Ascending Numbers
// //Write a function that will return true if a given string (divided and grouped into a size) will contain a set of
// //consecutive ascending numbers,otherwise return false.
function ascending(str){
    var length = 1;

    while (length <= (str.length / 2))  // since the first number can't have more digits than the second
    {
        if (ascendingWithNDigits(str,length))
            return true;
        length++
    }
    return false;

}
function ascendingWithNDigits(str,n){
    var iterations = (str.length / n) - 1;
    if (!Number.isInteger(iterations))
        return false; //since none of the test cases have consecutive numbers with more digits than the previous
    for (var i = 0; i < iterations; i++){
        var prev = + (str.substr(n * i, n));
        var next = +(str.substr(n * (i + 1),n));

        if ((prev + 1) != next)
        return false;
    }
    return true
}
console.log(ascending("123124125")) //true
//Contains a set of consecutive ascending numbers
//if grouped into 3's : 123,124,125
console.log(ascending("101112131415")) //true
//Contains a set of consecutive ascending numbers
//if grouped into 2's: 10,11,12,13,14,15
console.log(ascending("3233432536")) //false
//Regardless of the grouping size,the numbers can't be consecutive
console.log(ascending("326325324323")) //false
//Though the numbers (if grouped into 3's) are consecutive but descending
console.log(ascending("666667")) //true
//Consecutive numbers: 666 and 667


// Longest Substring with Non-repeating Characters
// Write a function that returns the longest non-repeating substring for a string input
function longestNonrepeatingSubstring(str){
  let s = "",t = ""
    for(const i of str){
        if(s.includes(i))s = s.slice(s.indexOf(i) + 1)
        s+=i
        if (s . length > t . length)t = s
    }
    return t
}
console.log(longestNonrepeatingSubstring("abcabcbb")) //"abc"
console.log(longestNonrepeatingSubstring("aaaaaa")) //"a"
console.log(longestNonrepeatingSubstring("abcde")) //"abcde"
console.log(longestNonrepeatingSubstring("abcd")) //"abcd"

//Count the Countdown Sequence
//A countdown sequences a descending sequence of k integers from k down to 1 (e.g 5,4,3,2,1).Write a function that returns
// an array of the form [x, y] where x is the number of countdown sequences in the given array and y is the array of those
// sequences in the order in which they appear in the array.
// finalCountdown([4, 8, 3, 2, 1, 2]) ➞ [1, [[3, 2, 1]]]
// // 1 countdown sequence: 3, 2, 1
//
// finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]) ➞ [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
// // 2 countdown sequences:
// // 5, 4, 3, 2, 1 and 3, 2, 1
//
// finalCountdown([4, 3, 2, 1, 3, 2, 1, 1]) ➞ [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
// // 3 countdown sequences:
// // 4, 3, 2, 1 ; 3, 2, 1 and 1
//
// finalCountdown([1, 1, 2, 1]) ➞ [3, [[1], [1], [2, 1]]]
//
// finalCountdown([]) ➞  [0, []]

// One Small Favor
// My friend required some help with an assignment in school and I thought this would be a nice additional to be added as a challenge here
// as well.
//
// Create a function that takes a sentence and returns a modified sentence abided by these rules:
//  If you encounter a date within the sentence ,in the format DD/MM/YY or DD.MM.YY,You have to change it over to DD/MM/YYYY or DD.MM.YYYY(same separator char).
//  If you encounter a date within the sentence,in the format MonthName,DD.YY.you have to change it over to MonthName,DD.YYYY.
//  If you encounter an invalid MonthName then leave it as is.
//  For this challenge,there is an arbitrary rule that if YY is less than 25 the year-prefix will be 20,otherwise the year-prefix will be 19.
//  Meaning 08/11/20 -> 08/11/2020 or 02/11/95 -> 02/11/1995

//
function smallFavor(s){
 var i = s.length-1;
 if(s.includes("Fakemonthly")){
 return s;
 while (i >= 0 && isNaN(parseInt(s[i]))) i--;
 if(i > 1 && s[i - 2] != '|'){
     if (parseInt(s.substr(i - 1, 2))<25) s = s.substr(0,i-1)+"20"+s.substr(i - 1);
     else s = s.substr(0,i - 1) + "19" + s.substr(i-1);
 }
 }
 return s
}

console.log(smallFavor("I was born on 11/02/98")) //"I was born on 11/02/1998"
console.log(smallFavor("I was born on 11/02/98 and what about you?")) //"I was born on 11/02/1998 and what about you"
console.log(smallFavor("I was born on 02.11.2019")) //"I was born on 02.11.2019"
console.log(smallFavor("I was born on February,02.98")) //"I was born on February, 02. 1998."
console.log(smallFavor("I was born on January, 01.15 and today is october, 08.20. ")) //"I was born on January, 01. 2015. and today is October, 08. 2020."
console.log(smallFavor("I was born on Fakemonthy, 01. 15. dont change invalid dates")) //"I was born on Fakemonthy, 01. 15. dont change invalid dates"