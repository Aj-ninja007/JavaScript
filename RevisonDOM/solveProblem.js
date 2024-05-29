//solve problem of callback hell by using promises

// let promise = new Promise((resolve,reject)=>{
//      console.log("solve");
//     resolve(123);
//     // reject("some error");

// });
const getPromise=()=>{
return new Promise((resolve,reject)=>{
    console.log("solve");
//    resolve("123");
   reject("some error");
});
};

let promise =getPromise();
promise.then(()=>{
  console.log("promise fulfilled");
});

promise.catch((err)=>{
  console.log("reject");
});

// function getdata(dataid,getnextdata){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         console.log("data",dataid);
//         resolve("sucess");
//         if(getnextdata){
//             getnextdata();
//         }
//     },5000);
//     });
// }