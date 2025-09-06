function getData(data,nextData){
    setTimeout(()=>{
     console.log("data ",data);
     if(nextData){
        nextData();
     }
    },2000)
}


//callback hell
//pyramid Dhoom exception

getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(6);
            });
        });
    });
});
