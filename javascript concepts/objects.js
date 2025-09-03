console.log("hello my this is a file of objects ");

// to create object we use JSON format (key : value ) pair 

let obj = {

"name" : "Alaf Baig",
    "age": "24",
    "city" : "Delhi"
}

//fully object print

console.log(obj);

//single object print

console.log(obj["name"]);

console.log(obj["age"]);

// print full object one by one by loop 
for(  const e in obj  ){
    console.log(e+" : "+obj[e]);
}

// for in loop is basically itrate for objects 
// iterate object ,stored key value in element e , then  print value of e by obj[e];