//map-> creates a new array with the result of some operation

let arr=[1,2,3,4];

let newArr = arr.map((val)=>{
    return val*val;
});

console.log(newArr);