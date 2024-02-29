
// Find the largest element in an array.

const arr = [2,5,1,3,0];
let largestElement = 0;

for(let i=0; i < arr.length; i++){
    if(arr[i] > largestElement){
        largestElement = arr[i];
    }
}

console.log("The largest element is :" + largestElement);