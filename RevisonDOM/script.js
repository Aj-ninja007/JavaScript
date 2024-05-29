// console.dir(document.body.childNodes[1]);
// document.body.childNodes[3].innerText="prince mishra";


// let first=document.getElementById("j1"); //null
// //empty  html collection
// console.dir(first);

//query slector // it return nodelist
// document.querySelector("j1"); //1st element
// document.querySelectorAll('j1'); //all elements

// let h2=document.querySelector('h2');
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + "from apna college student";

// let divs = document.querySelectorAll(".box");
// console.dir(divs)


// let div = document.querySelector("div");
// div.style.background="green";
// div.style.visibility="hidden";



//............insert element...........

let newbtn=document.createElement("button");
newbtn.innerText="clickme"
console.dir(newbtn);
let div = document.querySelector("div")
div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn)
// div.after(newbtn)

let new1=document.createElement("h1");
new1.innerHTML="<i>hi i am prince</>";

document.querySelector("body").prepend(new1);