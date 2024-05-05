
// 1.Deleting the last element from the array:-
// Array will get modified hence we can't create any new array.

const a = [1,2,3,4,5,6,7];

let index = 3;

for(let i = index; i < a.length - 1; i++)
    {
        a[i] = a[i+1];
    }

    a.pop();

console.log(`Array after deletion of data :- ${a}`);

//2.Write Second program using splice for deleting and inserting the element on index 3;
//Add the value 9 on index 3.



// Using splice function:-

function usingSplice(n , index){
    // Remove 1 elements starting from index value and add value 9
    n.splice(index , 1, 9)
    return n;
}

const value = usingSplice(a , 3);

console.log(`After using splice now array is ${value}`);


// splice() is a built-in method in JavaScript that allows you to modify the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])