// Check if the array is sorted

const firstArr = [1 ,2 ,3 ,4 , 5 ,5 ]
const secondArr = [2 , 1, 9, 7,8 , 10]

let flag = 1;

for(let i = 1; i < firstArr.length; i++){
    if(firstArr[i] < firstArr[i-1]){
        flag = 0;
    }
}

if(flag == 0)
{
    console.log("The first array is unsorted");
}
if(flag == 1)
{
    console.log("The first array is sorted");
}

flag = 1;

for(let i = 1; i < secondArr.length; i++){
    if(secondArr[i] < secondArr[i-1]){
        flag = 0;
    }
}

if(flag == 0)
{
    console.log("The Second array is unsorted");
}
if(flag == 1)
{
    console.log("The Second array is sorted");
}