let arr=[1,2,3,4];

//creates new array on the basis of given condition

const even=arr.filter((val)=>{
    return val%2==0;
})
console.log(even);


//reduce function me previousvalue hoge and current value hoge;

// const arr1=arr.reduce((res,curr)=>{
//     return res+curr;
// })

// console.log(arr1)


const arr1=arr.reduce((res,curr)=>{
    return res>curr?res:curr;
})
console.log(arr1);

let nums=[99,87,33,98,62,92]
let nums1=nums.filter((val)=>{
    return val>90;
})
console.log(nums1);

l