//fetch API->is an interface for fetching (sending/receiving) resources
//it uese reguest and response objects.

//the fetch() method is used to fetch a resource(data).


const URL="https://cat-fact.herokuapp.com/facts";

const factPara=document.querySelector("#fact");

const btn=document.querySelector("#btn");


//fetch return promise
// let promise = fetch(URL);
// console.log(promise);

const getFacts=async()=>{
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);//first promise return in json formate
    let data =await response.json();//second promise return in js formate or isko readable form me convert krte h
    // console.log(data[0]);
    factPara.innerText=data[0].text;
};

btn.addEventListener("click",getFacts);
//get->jo data late h unhe getrequest bolte h