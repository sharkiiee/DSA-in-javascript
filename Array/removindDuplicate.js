//REMOVING DUPLICATES FROM THE ARRAY

//Shows the no. of elements present after removing duplicates.

//Note:-

// You can't create any new array.
//you have to modigy the array.


const array = [1,1,3,3,4,4,5,5,7,7]

function removindDuplicates(n)
{   
    // Using 2 pointer approach
    let i = 0;

    for(let j = 1; j < n.length; j++)
        {
            if(n[j] != n[i])
                {
                    n[i+1] = n[j];
                    i++
                }
        }
        return i+1;
}

const noOfValue = removindDuplicates(array);

console.log(`The no. of value found removing duplicates are ${noOfValue}`);