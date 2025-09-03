//target b1
let w = document.getElementById("b1");

w.addEventListener("mouseenter",()=>{
 let r =Math.floor( Math.random()*100);
  w.innerHTML=`<h1>${r}</h1>`;
})

w.addEventListener("mouseleave",()=>{
  w.innerHTML="<h1>1</h1>";
})

// target b2

let x =document.getElementById("b2");
clr="red";
x.addEventListener("mouseenter",()=>{
if(clr=="red"){
    x.style.backgroundColor="red";
    clr="green";
    
} else if(clr=="green"){ //clr==green

    x.style.backgroundColor="green";
    clr="blue";
}
else{ //clr ==blue
  
    x.style.backgroundColor="blue";
    clr="red"; 
}})

x.addEventListener("mouseleave",()=>{
    x.style.backgroundColor="white";
})

// target b3

let y = document.getElementById("b3");

y.addEventListener("mouseenter",()=>{
    let random1= Math.floor(Math.random()*255);
    let random2= Math.floor(Math.random()*255);
    let random3= Math.floor(Math.random()*255);
    y.style.backgroundColor=`rgba(${random1}, ${random2},${random3}, 1)`;
})

y.addEventListener("mouseleave",()=>{
    y.style.backgroundColor="white";
})

//target b4

let z = document.getElementById("b4")
z.addEventListener("click",()=>{
     let r1= Math.floor(Math.random()*255);
    let r2= Math.floor(Math.random()*255);
    let r3= Math.floor(Math.random()*255);
    w.style.backgroundColor=`rgba(${r1}, 75, 124, 1)`;
    x.style.backgroundColor=` rgba(79, ${r2}, 66, 1)`;
    y.style.backgroundColor=` rgba(177, 102, ${r3},1)`;
})

z.addEventListener("mouseleave",()=>{

      w.style.backgroundColor="white";
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
})
   
let main = document.getElementById("main")
let cursor = document.getElementById("cursor")
main.addEventListener("mousemove",(dets)=>{

cursor.style.left = dets.x+"px";
cursor.style.top=dets.y+"px";

})

