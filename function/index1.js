function calculateCartPrice(...num1){//rest operator is  ...
    return num1
}
//console.log(calculateCartPrice(200,400,500,30000))//gives in array

const use ={//this is object
    usenam:"prince",
    price:200
}
//pasing object in function

function handleobject(use){
    console.log(`usename is ${use.usenam} and price is ${use.price}`)
}
///handleobject(use)

//passsing array

const arr1=[22,3,122,455,6767,8870]
function handlearray(arr1){
    return arr1[3]
}
console.log(handlearray(arr1))