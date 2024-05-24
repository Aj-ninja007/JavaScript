function my(){
    console.log("prince mishra")
}
//my()

// function add(n,x)//parameter{
//    console.log( n+x)
// }
//add(4,"5")
// add(4,null)//argument

function add(n,c)
{
    let r=n+c
    return r
}

const re=add(3,4)
//console.log(re)

function loginuser(usename="sam"){
    if(usename===undefined){
        console.log("plese enter bassic")
        return
    }
    return `${usename} just logged in`
}

console.log(loginuser("prince"))
