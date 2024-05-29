// const object = {
//     username:"prince",
//     count:5,
//     alldetails:(()=>
//        // console.log(`usename: ${this.username}`);
//       console.log(this)
//     )
//  }
// console.log(object.username)
// console.log(object.alldetails())


//constructor function....................><.........
// new keyword is make constructor ,it gives new constructor
//step1 this create empty object
//step2 constructor call hote h  new key word k krte h 
//step3  then inject into the object


function User(username,logincount,isLogged){
    this.username=username;
    this.logincount=logincount;
    this.isLogged=isLogged;
    return this
}

const userOne = new User("prince",4,true)
const userTwo = new User("ram",332,true)

console.log(userTwo);