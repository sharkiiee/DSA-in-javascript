// Write a program to reverse the given number .

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reverseNumberWithLeadingZeros(number) {
    // Convert number to string
    var str = number.toString();
    // Reverse the string
    var reversedStr = str.split('').reverse().join('');
    // Convert the reversed string back to a number
    var reversedNumber = parseInt(reversedStr, 10); // Ensure base 10 conversion
    return reversedNumber;
}

let number1 = 00123;
console.log(reverseNumberWithLeadingZeros(123));
console.log(reverseNumberWithLeadingZeros(parseInt(00123,10)));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function reverseNumber(number) {
//     // Convert number to string, split it into an array of characters, reverse the array, then join it back
//     // into a string
//     var reversedString = number.toString().split('').reverse().join('');
//     // Convert the reversed string back to a number
//     var reversedNumber = parseInt(reversedString);
//     return reversedNumber;
// }

// console.log(reverseNumber(00123)); 
// console.log(reverseNumber(987654321)); 

//  This program defines a reverseNumber function that takes a number as input. It converts the number to a
//  string using toString(), splits it into an array of characters using split(''), reverses the array using 
//  reverse(), and finally joins the characters back into a string using join(''). Then, it converts the 
//  reversed string back to a number using parseInt().

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function reverseNumber(number) {
//     // Convert number to string, split it into an array of characters, reverse the array, then join it back
//     // into a string
//     var reversedString = number.toString().split('').reverse().join('');
//     // Convert the reversed string back to a number
//     var reversedNumber = parseInt(reversedString);
//     return reversedNumber;
// }

// console.log(reverseNumber(00123)); 
// console.log(reverseNumber(987654321)); 

//  This program defines a reverseNumber function that takes a number as input. It converts the number to a
//  string using toString(), splits it into an array of characters using split(''), reverses the array using 
//  reverse(), and finally joins the characters back into a string using join(''). Then, it converts the 
//  reversed string back to a number using parseInt().

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Note Points:-

// 1.There will be an issue when you perform some operation on number and it gives floating value in javascript
// but you assumed to have a decimal value its happens because javascript is dynamic(NO STRICT DATATYPES) in
// nature.

//  Can be solved using :-
// -typescript
// -Using Math.floor(): This method returns the largest integer less than or equal to a given number.

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////



// Programs:-

// 1. Find the number of digits in a number.
// 2. Write a program to reverse the given number .
