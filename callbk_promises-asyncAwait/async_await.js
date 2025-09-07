function getData(data){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
      console.log(data);
      resolve("sucess");
        },2000)
    })
}

//quick run function IIFE
(async ()=>{

   await getData(1);
   await getData(2);
   await getData(3);
   await getData(4);
   await getData(5).then((res)=>{console.log(res)});
}) ();


