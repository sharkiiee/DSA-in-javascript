const array = [2,2,4,6,8,6,7,3];

function findSecondSmallest(n){
    
    let smallest = Number.MAX_VALUE;
    let sSmallest = Number.MAX_VALUE;

    for(let i = 0; i < n.length; i++)
        {
            if(n[i] < smallest)
                {
                    sSmallest = smallest;
                    smallest = n[i];
                }
            else if((sSmallest > n[i] && (n[i] != smallest))){
                sSmallest = n[i];
            }
        }
        return sSmallest;
}

const result = findSecondSmallest(array);

if(result == Number.MAX_VALUE)
    {
        console.log("Something wrong with the inputs in array");
    }
else{
    console.log(`The second smallest no is ${result}`);
}
