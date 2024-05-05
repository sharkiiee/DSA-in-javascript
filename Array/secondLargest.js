// Find second largest element in an array.

const arr = [1,2,4,7,7,5];

function findSecondLargest(array){
    let largestNo = array[0] ;
    let sLargestNo = -1;

    for( let i = 0; i < array.length; i++)
        {
            if(array[i] > largestNo){
                sLargestNo = largestNo;
                largestNo = array[i];
            }
            else if(( array[i] > sLargestNo ) && (array[i] < largestNo)){
                sLargestNo = array[i];
            }

        }
        return sLargestNo;
}

const secondLargest = findSecondLargest(arr);

console.log(secondLargest);



