// 1.Find the number of digit in a number.

function countDigits(number) {
    // Convert number to string and get its length
    return number.toString().length;
}

console.log(countDigits(123)); 
console.log(countDigits(9876543210));

// Using Math.floor(): This method returns the largest integer less than or equal to a given number.
// Other way type will be integer onlt 
// function countDigits(numbers){
//     let count = Math.floor(Math.log10(numbers)+1);
//     return count;
// }

// console.log(countDigits(4730));


