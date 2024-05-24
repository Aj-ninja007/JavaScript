//object

const user={
    username:"prince",
    price:3333,
    wellcome:function(){
        console.log(`${this.username}`)//current valuse used if change in any value then its also change
    //  console.log(this)
    }
}
// user.wellcome()
// user.username="mishra"
// user.wellcome()

// console.log(this)

// function chai(){
//     let usename="prince"
//     console.log(this.usename)
// }

//  const chai=function(){
//     let usename="prince"
//     console.log(this.usename)
// }

const chai=()=>{
    let usename="prince"
    console.log(usename);//this only work in object
}
chai()
//arrow function
const chai1=(n,x)=>(n+x)
console.log(chai1(3,4))

const chai3=()=>{
  console.log("hello")
}
chai3()