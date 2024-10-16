// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

// let arr = [0, 1, 2, 3];
// let arr1 = [1, 0, 1, 2];
// let arr2 = [2, 1, 0, 1];
// document.write(arr + "<br>");
// document.write(arr1 + "<br>");
// document.write(arr2 + "<br>");



//3 . Write a program to print numeric counting from 1 to 10.


// for(let i = 1; i<=10; i++){
//     console.log(i);
// }


// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.


// let usersNumber = prompt("Enter a number to show its multiplication table");
// let userLength = prompt("Enter a table length");

// document.write(`Multiplication table of ${usersNumber} lenght of ${userLength} <br>`);

// for(let i = 1; i<=userLength; i++){
//    let  result1 = usersNumber * i;
//     document.write(`${usersNumber} x ${i} = ${result1} <br>`);
// }

//5 . Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// let arr = ["apple", "banana", "mango", "orange", "strawberry"];

// for(let i=0; i<arr.length; i++){
//     document.write(`Element at index of ${i} is ${arr[i]} <br>`);
// }

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// a
// document.write("<h2> Counting: </h2> <br>"); 
//  for(let i = 1; i<=15; i++){
  
//     document.write(i + ",");
//  }

// // b.

// document.write("<h2> Reverse counting: </h2> <br>");

// for(let i = 10; i>=1; i--){
//     document.write(i + ",");
// }
// // c.

// document.write("<h2> Even: </h2> <br>");

// for(let i = 0; i<=20; i+=2){
//     document.write(i + ",");
// }
// // d.

// document.write("<h2> Odd: </h2> <br>");
// for(let i= 1; i<=19; i+=2){
//     document.write(i+ ",")
// }

// // e

// document.write("<h2> Series: </h2> <br>");

// for(let i =2; i<=20; i+=2){
//     document.write(i + "k,");
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var searchItems = prompt("Enter an item to search");

// var found = A.includes(searchItems);

// var message;

// if(found){
//     message = `${searchItems} is found in the list`;
// } else{
//     message = `${searchItems} is not in the list`
// }

// document.write(message);


// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].


// let arr = [24, 53, 78, 91, 12];

// let largestNumber = arr[0];

// for(let i = 1; i<arr.length; i++){
//     if(arr[i] > largestNumber){
//         largestNumber = arr[i];
//     }
// }

// document.write(`The largest number is ${largestNumber}`);

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]


// let arr = [24, 53, 78, 91, 12];

// let smallestNumber = arr[0];

// for(let i = 1; i<arr.length; i++){
//     if(arr[i] < smallestNumber){
//         smallestNumber = arr[i];
//     }
// }
// document.write(`The smallest Number is ${smallestNumber}`);


// 10. Write a program to print multiples of 5 ranging 1 to 
// 100

// for(let i = 5; i<=100; i+=5){
//     document.write(i + ",");
// }

//  The End