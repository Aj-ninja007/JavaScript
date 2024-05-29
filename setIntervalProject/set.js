
// console.log("hell");

// setTimeout(()=>{
// console.log("hello");
// },4000);

// function hello(){
//     console.log("hel");
// }

// setTimeout(hello,2000);
// console.log("hel");

function getData(dataid,nextdata){
  setTimeout(()=>{
   console.log("data",dataid);
   if(nextdata){
    nextdata();
   }
  
  },2000);
}

//callback hell=>nested callback
getData(1,()=>{
    console.log("getting data2...");
    getData(2,()=>{
       getData(3,()=>{
        getData(4);
       });
    });
});
// getData(2);
// getData(3);