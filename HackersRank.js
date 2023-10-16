// Given an array of integers,calculate the rations of its elements that are positive,negative,and zero. Print the decimal
// value of each fraction on a new line with 6 places after the
// decimal.
//     Note: This challenge introduces precison problems . The test cases are scaled to six decimal places,though answers with
//     absolute errors of upto 10 are acceptable.

// Example
// arr = [1,1,0,-1,-1]
// There are n = 5 elements two positive ,two negative and one zero.Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000.
// Results are printed as:
// 0.400000
// 0.400000
// 0.200000
// Function Description
// Complete the plusMinus function in the editor below. plusMinus has the following parameters(s):
// .int arr[n]: an array of integers
//Print
//Print the ratios of positive,negative and zero values in the array. Each value should be printed on separate line with 6 digits atfer the
// decimal . The function should not return a value.

//     Input Format
// The first line contains an integer,n,the size of the array. The second line contains n space-separated integers that describe
// arr[n]
// Constraints
// 0 < n < 100
// -100 < arr[i]<100

// Output Format
// Print the following 3 lines,each to 6 decimals:
// i.proportion of positive vslues
// 2.proportion of negative values
// 3.proportion of zeros

// Sample Output
// STDIN             Function
// 6                    arr[] size n = 6
// -4 3 -9 0 4 1 arr = [-4,3,-9,0,4,1]

// Sample Output
// 0.5000
// 0.333333
// 0.166667

// Explanation
// There are 3 positive numbers, 2 negative numbers, and 1 zero in the array
// The proportions of occcurence are positive: 3/6 = 0.500000, negative : 2/6 = 0.333333 and zeros: 1/6 = 0.166667.

// function readLine(){
//     return inputString[currentLine++];
// }

// function plusMinus(arr){
//   // let n = arr.length;
//   // let [i, positiveCount,negativeCount,zeroCount] = [0,0,0,0];
//   //  while (i < n){
//   //      arr[i] < 0 ?
//   //          negativeCount++ :
//   //          arr[i] > 0 ? positiveCount++ :
//   //              zeroCount++;
//   //      i++;
//   //  }
//   //  let positiveProportion = (positiveCount / n).toFixed(6);
//   //   let negativeProportion = (negativeCount / n).toFixed(6);
//   //   let zeroProportion = (zeroCount / n).toFixed(6);
//   //
//   //   console.log(`${positiveProportion}\n${negativeProportion}\n${zeroProportion}`);
//
//     //Variables
//     let arrSize = arr.length;
//     let ratioPositive = 0;
//     let ratioNegative = 0;
//     let ratioZero = 0;
//
//     //Array Function
//     arr.forEach(value => {
//         if (value > 0)
//             ratioPositive++;
//         else if(value < 0)
//             ratioNegative++;
//         else if(value === 0)
//             ratioZero++;
//     });
//     ratioPositive /= arrSize;
//     ratioNegative /= arrSize;
//     ratioZero /= arrSize;
//
//     console.log(ratioPositive.toFixed(6));
//     console.log(ratioNegative.toFixed(6));
//     console.log(ratioZero.toFixed(6));
//
// }

//Mini-Max Sum
// Given five positive integers,find the minimum and maximum values that can be calculated by summing exactly four of the
// five integers. Then print the respective minimun and maximum values as a single line of two space-separated long integers

// Example
// arr = [1,3,5,7,9]
// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints
// 16 24
// Function Description
// Complete the miniMaxSum function in the editor below. miniMaxSum has the following parameters(s):

// .arr: an array 0f 5 integers

// Print
// Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements

// Input Format
// A single line of five space-separated integers

// Constraints
// 1 < arr[i]<10

// Output Format
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing
// exactly four of the five integers. (The output can be greater than a 32 bit integer)

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// Explanation
// The numbers are 1,2,3,4 and 5. Calculate the following sums using four of the five integers:
// The numbers are 1,2,3,4 and 5. Calculate the following sums using four of the five integers:
// 1. Sum everything except 1, the sum is 2 + 3 + 4 + 5 = 14.
// 2.Sum everything except 2, the sum is 1 + 3 + 4 + 5 = 13
// 3.Sum everything expect 3, the sum is 1 + 2 + 4 + 5 = 12
// 4.Sum everything expect 4,the sum is 1 + 2 + 3 + 5 = 11
// 5.Sum everything expect 5, the sum is 1 + 2 + 3 + 4 = 10

// function readLine(){
//     return inputString[currentLine++];
// //     Complete the 'miniMaxSum' function below
//     //The function accepts INTEGER_ARRAY arr as parameter
// }

// function miniMaxSum(arr){
//     // const sum = arr.reduce((a,b)=> a + b);
//     //
//     // let [max,min] = [Math.max(...arr), Math.min(...arr)]
//     // let [maxSum, minSum] = [sum - min, sum - max];
//     //
//     // console.log(minSum,maxSum)
//     //
//     //
//
//     // arr.sort((a,b)=> (a - b));
//     // const min_sum = arr.slice(0,-1).reduce((acc,value)=>(acc + value));
//     //
//     // console.log(`${min_sum} ${max_sum}`);
// }


//Given a time in 12-hour AM/PM format,convert it to military(24-hours)time.
// Note:12:00:00AM on a 12-hours clock is 00:00:00 on a 24-hour
// 12:00:00PM on a 12-hours clock is 12:00:00 clock

// Example
// . s = '12:01:00PM'
// Return '12:01:00'.

// Function Description
// Complete the time Conversion function in the editor below. It should return a new string representation the input time in 24hour format.

// timeConversion has the following parameter(s):

// .string:a time in 12 hour format

// Returns
// .string: the time in 24 hour format

// Input Format
// A single string that represent a time in 12-hour clock format(i.e:hh:mm:ssAM or hh:mm:ssPM).

// Contraints
//All input times are valid

// Sample input
// 07:05:45PM

// Sample Output
//19:05:45
// function readLine(){
//     return inputString[currentLine++];
// }

//Complete the 'timeConversion' function below.
// The function is expected to return a STRING.
// The function accepts STRINGs as parameter.

// function  timeConversion(s){
//
//     // let time = s.slice(0,8).split(':');
//     // let amPM = s.slice(8,10).splice(8,10).toLowerCase();
//     // let hours = parseInt(time[0]);
//     //
//     // !(amPM === 'am' && hours !== 12 || amPM === 'pm' && hours === 12) ? hours += 12:null;
//     //
//     // hours === 24 ? hours %= 12 : null;
//     //
//     // hours < 10 ? hours  = '0'+ hours.toString() : hours = hours.toString();
//     //
//     // time[0] = hours;
//     //
//     // return time.join(':')
//
//     //Variables to hold the individual time pieces
//     let hrs = s.slice(0,2);
//     const mins = s.slice(3,5);
//     const sec = s.slice(6,8);
//
//     //Conditional to determine the time conversion
//     if (s.includes("AM")){
//         if (hrs === '12'){
//             hrs = '00';
//         }
//         return `${hrs} : ${mins} : ${sec}`;
//     } else {
//         hrs = parseInt(hrs);
//         if (hrs < 12){
//             hrs = hrs + 12;
//         }
//         return `${hrs}:${min}:${sec}`;
//     }
// }


// week2
//Lonely integer
//Given an array on integers,where all elements but one occur twice,find the unique element.
// Example
// a = [1,2,3,4,3,2,1]
// The unique element is 4.

// Function Description
// Complete the lonelyinteger function in the editor below. Lonelyinteger has the following parameter(s):
// .int a[n]:an array of integers

// Returns
// .int:the element that occurs only once

// Input Format
// The first line contains a single integer, n, the number of integers in the array. The second line contains n space-separated
// integers in the array. The second line contains n space-separated integers that describe the value in a.

// Constraints
// . 1 < n < 100
// .It is guaranteed that n in an odd number that there is one unique element
// .0 < a[i] < 100,where 0 < i < n.

// function readLine(){
//     return inputString[currentLine++];
// }

//Complete the 'lonelyinteger' function below
//The function is expected to return an INTEGER
//The function accepts INTEGER_ARRAY a as parameter

// function lonelyinteger(a){
  // let result = [];
  // a.map(element => a.filter(e => e === element).length === 1  ? result.push(element) : null);
  // return result

    // EXAMPLE: [1, 2, 3, 4, 3, 2, 1]
    // var first_array = []
    // var second_array = []
    // var unique
    //
    // for (var i = 0; i < a.length; i++){
    //     if (first_array.includes(a[i]) === false){
    //         first_array.push(a[i])
    //     } else {
    //         second_array.push(a[i])
    //     }
    // }
    //after the first loop:
    //first_array = [1,2,3,4]
    //second_array = [3,2,1]
    //the unique element is the one in the first_array that doesn't exist in second_array

//     for (var i = 0 ; i < first_array.length; i++ ){
//         if (second_array.includes(first_array[i]) === false){
//             unique = first_array[i]
//         }
//     }
//
//     return unique
// }

//Diagonal Difference
// Given a square matrix,calculate the absolute difference between the sum of its diagonals
// For example,the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| -2

// Function description
// Complete the diagonalDifference function in the editor below.
// diagonalDifference takes the following parameter:
// .int arr[n][m]: an array of integers

// Return
// .int: the absolute diagonal difference

// Input Format
// The first line contains a single integer,n, the number of rows and columns in the square matrix arr
// Each of the next n lines describes a row,arr[i],and consists of n space-separated integers arr[i][j].

// Constraints
// .-100 < arr[i][j] < 100

// Output Format
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// Sample Input
// 15

// Explanation
// The primary diagonal is:
// 11
// 5
// -12

// Sum across the primary diagonal: 11 + 5 - 12 = 4
// The secondary diagonal is:
// 4
// 5
// 10

// Sum across the secondary diagonal : 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15
// function readLine(){
//     return inputString[curruntLine++];
// }

// function diagonalDifference(arr){
// const len = arr.length;
// let [leftDiag,rightDiag] = [0,0]
//
//     for (let [i, j ] = [0,0]; i,j < len; i--, j++)
//         leftDiag += arr[i][j];
//     for (let [i,j] = [len - 1,0]; i >= 0, j < len; i--,j++)
//         rightDiag += arr[i][j];
//
//     const dif = Math.abs(leftDiag - rightDiag);
//
//     return dif

//     for (let [i,j, k] = [0,0,len - 1];i,j < len, k >= 0; i++, j++, k--){
//         leftDiag += arr[i][j];
//         rightDiag += arr[k][j];
//     }
//
//     const dif = Math.abs(leftDiag - rightDiag);
//     return dif
// }

//Diagonal Difference
// Given a square,matrix,calculate the absolute difference between the sums of its diagonals.
// For example,the square matrix arr is shown below:
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 1.Their absolute difference is |15 - 17| = 2
// Function description
// Complete the diagonalDifference function in the editor below.
// diagonalDifference takes the following parameter:
// .int arr[n][m]: an array of integers

// Return
// .int: the absolute diagonal difference


// Input Format
// The first line contains a single integer, n , the nukber of rows and columns in the q=square matrix arr.
// Each of the next n line describes arow,arr[i],and consists of n space-separated integers arr[i][j].

// Constraints
// .-100 < arr[i][j] < 100

// Output Format
// Return the absolute difference between the sums of the matrix's two diagonal as a single integer.

// Sample Input
// 3
// 11 2 4
//4 5 6
//10 8 -12

// Sample Output
// 15

// Explanation
// The primary diagonal is:
// 11
// 5
// -12

// Sum across the primary diagonal: 11 + 5 - 12 = 4
// The secondary diagonal is:
// 4
// 5
// 10

// function readLine(){
//     return inputString[currentLine++];
//
// }
//Complete the diagonalDifference function below.
//The function is expected to return an INTEGER.
//The function accepts 2D_INTEGER_ARRAY arr as parameter

// function diagonalDifference(arr){
//     const len = arr.length;
//     let[leftDiag, rightDiag] = [0,0]
//
//     // for (let [i,j] = [0,0]; i,j < len; i++, j++)
//     //     leftDiag += arr[i][j];
//     //
//     // for (let [i,j] = [len - 1, 0]; i >= 0, j < len; i++, j++)
//     //     rightDiag += arr[i][j];
//     //
//     // const dif = Math.abs(leftDiag - rightDiag);
//     //
//     // return dif
//     // for (let [i,j,k] = [0,0,len - 1]; i, j < len, k >= 0; i++,j++,k--){
//     //     leftDiag += arr[i][j];
//     //     rightDiag += arr[k][j];
//     // }
//     // const dif = Math.abs(leftDiag - rightDiag);
//     //
//     // return dif
// }

//Comparison sorting

// Quicksort usually has arunnin time of n x log(n),but is there an algorithm that can sort even faster? In general,this is not
// (possible) . Most sorting algorithm are comparison sort ,i.e they sort a list just by comparing the elements to one another. A comparison sort algorithm
// cannot beat n x log(n) (worst-case) running time since n x log(n) represents the minimum number of comparisons needed to know
// where to place each element.

    //Alternative Sorting
// Another sorting method,the counting sort,does not require comparison. Instead, you create an integer array whose index range
// covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index
// At the end,run through your counting array,printing the value of each non-zero valued index that number of times.

// Example
// arr = [1,1,3,2,1]

// All of the values are in the range [0...3],so create an array of zero,result = [0,0,0,0]. The result of each iteration follow
// i       arr[i]      result
// 0          1            [0,1,0,0]
// 1             1            [0,2,0,0]
// 2              3           [0,2,0,1]
// 3             2               [0,2,1,1]
// 4             1                   [0,3,1,1]

// The frequency array is [0,3,1,1]. These values can be used to create the sorted array as well: sorted = [1,1,1,2,3].
// Note:
// For this exercise,always return a frequency array with 100 elements. The example above shows only the first elements, the reminder being
// zeros.

//Challenge
// Given a list of integers,count and return the number of times each value appears as an array of integers

// Function Description
// Complete the countingSort function in the editor below. countingSort has the following parameter(s):

// .arr[n]: an array of integers

// Returns
    // .int[100]:a frequency array

// Input Format
// The first line contains an integer n, the number of items in the arr. Each of the next n lines contains an integer
// arr[i] where
//0<i<n.

// Contraints

// 100< n < 10
// 0 < arr[i]<100

// Sample Input
// 100
// 63 25 73 1 98 73 56 84 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10
// 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30
// 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33

// Sample Output
// 0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0
// 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2

// function readLine(){
//     return inputString[currentLine++];
// }
//Complete the 'countingSort' function below
//The functon is expected to return an INTEGER_ARRAY
// The function accepts INTEGER_ARRAY arr as parameter

// function countingSort(arr){
//   // const zerosArray = Array.from({length:100}).fill(0)
//   //   for (let index of arr.keys()){
//   //       zerosArray[arr[index]]++
//   //   }
//   //
//   //   return zerosArray
// // const returnArr = []
// //     for (let i = 0; i < arr.length; i++){
// //         const item = arr[i]
// //         if (i < 100 && returnArr[i] === undefined){
// //             returnArr[i] = 0
// //         }
// //         if (returnArr[item]){
// //             returnArr[item] = returnArr[item] + 1
// //         } else {
// //             returnArr[item] = 1
// //         }
// //     }
// //     return returnArr
//     let newArr = new Array(100).fill(0)
//     for (let i = 0; i < arr.length; i++){
//         if (arr.includes(arr[i])){
//             newArr[arr[i]] = newArr[arr[i]] + 1
//         }
//     }
//     return newArr
// }

//Week 3
// In this challenge the task is to debug the existing code to successfuly execute all provided test files
// Given an array of n distinct integers,transform the array into a zig zag sequence if the first k elements in the sequence
// are in increasing order and the last k elements are in decreasing order, where k = (n + 1)/2. You need to find the lexicographically
// smallest  zig zag sequence of the given array.

// Example .
// a = [2,3,5,1,4]

// Now if we permute the array as [1,4,5,3,2],the result is a zig zag sequence.
// Debug the given function find zig zagSequence to return the appropriate zig zag sequence for the given input array
// NOte: You can modify at most three lines in the given code. You cannot add or remove lies of code

// Input Format
// The first line contains t the number of test cases. The first line of each test case contains an integer n,denoting
// the number of array elements. The next line of the test case contains n elements of array a.

// Constraints
// 1 < t < 20
// 1 < n < 10000(n is always odd)
// 1 < a < 10
// function processData(input){
//
// }


// Two players are playing a game of Tower Breakers! Player 1 always move first,and both players always play optionally. The ruleo
// of the game are as follows.:
// . Initially there are n(towers)
// .Each tower is of height m
// .The players move in alternating turns
// In each turn,a player can choose a tower of height x and reduce its height to y, where 1 < y < x and y evenly divides
// (x)
// .If the current player is unable to make a move,the lose the game

// Given the value of n and m, determine which player will win. If the first player wins,return 1. Otherwise return 2.

// Example n = 2
// m = 6
// There are 2 towers,each 6 units tall. Player 1 has a choice of two moves:
// -remove 3 pieces from a tower to leave 3 as 6 modulo 3 = 0
// -remove 5 pieces to leave 1
// Let player 1 remove 3. Now the towers are both 3 and 6 units tall. Player 2 matches the move. Now the towers are both 3 units tall.Now
// player 1 has only one move.
// Player 1 removes 2 pieces leaving 1. Towers are 1 and 2 units tall.
// Now Player 1 has only one move.
// Player 1 removes 2 pieces leaving 1. Towers are 1 and 2 units tall.
    // Player 2 matches again. Towers are both 1unit tall
// Player 2 matches again. Towers are both 1 unit tall.
    // Player 1 has no move  and loses. Return 2 .

    // Function Description
// Complete the towerBreakers function in the editor below. towerBreakers has the following parameter(S):
// .int n : the number of towers
// .int m : the height of each tower

// Returns
// int: the winner of the game

// Input Format
// The first line contains a single integer t, the number of test cases. Each  of the next t lines describes a test case in
// the form of 2 space separated integers, n and m.

//Constraints
// 1 < t < 100
// 1 < n,m < 1000000

// Sample Input
// STDIN  Function
// 2          t = 2
// 2 2        n = 2, m = 2
// 1 4        n = 1, m = 4

// Sample Output
// 2
// 1

// Explanation
// we'll refer to Player 1 as p1 and player 2 as p2
// In the first test case, p1 chooses one of the two towers and reduces it to 1. The n p2 reduces the remaining tower to a
// height of 1. As both towers now have height 1, p1 cannot make a move so p2 is the winner
// In the second test case,there is only one tower of height 4. p1 can reduce the height of either 1 or 2 . p1 chooses 1 as both players always choose
// optinally. Because p2 has no possible move,p1 wins