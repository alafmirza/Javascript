function getData(data){

    // create priomise
return new Promise((resolve, reject) => {

    setTimeout(()=>{
  console.log("data ",data);
   resolve("sucess");
},2000)

})
}

//promise chaining 

getData(1).then(()=>{

    getData(2).then(()=>{

    getData(3).then(()=>{

    getData(4).then((res)=>{console.log(res)})

        })
    })
});