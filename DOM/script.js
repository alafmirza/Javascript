//dom mainupulation

// target eleents
let x = document.getElementById("one");
let y = document.getElementById("two");
let z = document.getElementById("three");


 x.style.color="red";
 y.style.color="pink";
 z.style.color="lightgreen";

 // event listner   

x.addEventListener("mouseenter", ()=>{
    x.style.color="red";
})
x.addEventListener("mouseleave", ()=>{
    x.style.color="black";
})

z.addEventListener("click",()=>{

    x.style.backgroundColor="lightblue"
})

y.addEventListener("mouseenter",()=>{
       z.style.backgroundColor="lightgreen";
});
y.addEventListener("mouseleave",()=>{
       z.style.backgroundColor="white";
});

