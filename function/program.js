
let n=prompt("enter the number");

let arr=[];

for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}

const ar1=arr.reduce((res,cur)=>{
     return res+cur;
});
console.log(ar1);