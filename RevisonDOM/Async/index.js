// let he=(()=>{
//     console.log("hello");
// });


//async-await =always return promise


function api()
{
    return new Promise((resolve,reject)=>{
         resolve(200);
    });
}
async function getWeatherData(){
 await api();
};

//await pauses the execution of its surrounding async function until function the promise is settled
//always use in async 

