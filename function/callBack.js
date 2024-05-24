let arr=[1,2,3,4];

arr.forEach(function print(val){
  console.log(val);
});


// or


arr.forEach((val)=>{
    console.log(val);
})


// Value,index,array-> forEach function me itne chezz pass kr sakte h

//callback function->
//higher order function -foreach or aise function jo dusre function ko use krte parameter or return krte h ki 

arr.forEach((val,index)=>{
    console.log(val*val,"",index);
})