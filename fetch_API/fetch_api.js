
//fetch a dog breed api 
let url =  "https://dogapi.dog/api/v2/breeds";

(async ()=>{
    let response = await fetch(url);
  let output =  await response.json();
    console.log(output.data);    
}
)();



