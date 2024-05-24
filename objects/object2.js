

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// merge objects
//const obj3= Object.assign(obj1,obj2)
// console.log(obj3)

//by using spread operator to merge object
const obj3 = {...obj1,...obj2}
console.log(obj3)

//when data come from data base
