
// Deleting the last element from the array:-
// Array will get modified hence we can't create any new array.

const array = [1,2,3,4,5];

function deleting(n , index)
{
    if(index < 0 || index > n.length){
        return -1;
    }
    else{
        for(let i = index ; i < n.length - 1; i++)
            {
                n[i] = n[i+1];
            }
            n.pop();
            return n;
    }

}

const afterDeletion = deleting(array, 5);

console.log(`Array after deletion of data :- ${afterDeletion}`);