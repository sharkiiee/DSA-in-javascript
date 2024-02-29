// Find second smallest and second largest element in an array.

const arr = [1,2,4,7,7,5];


let smallest = arr[0];                                              
let largest = arr[0];
let secondSmallest = Number.MAX_SAFE_INTEGER;                            
let secondLargest = 0; 

for( let i = 1; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}

for( let i = 0; i < arr.length; i++){
    if( arr[i] > secondLargest && arr[i] != largest){
        secondLargest = arr[i];
        console.log(" for i = " + i + " the value is " + secondLargest + " larger value " + largest)
    }
}

for( let i = 0; i < arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];
    }
}

for( let i = 0; i < arr.length; i++){
    if(arr[i] < secondSmallest && arr[i] != smallest ){
        secondSmallest = arr[i];
    }
}

console.log("The largest no. is: " + largest);
console.log("The Second largest no. is: " + secondLargest);
console.log("The Smallest no. is: " + smallest);
console.log("The Second Smallest no. is: " + secondSmallest);



