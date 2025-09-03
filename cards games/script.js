let x = document.getElementById("main")
let a =[
"https://i.pinimg.com/736x/8a/ab/1d/8aab1d0741a312532239cd64fef5f75e.jpg",
"https://i.pinimg.com/736x/e0/da/85/e0da851591240db8d36d5a195c91b075.jpg",
"https://i.pinimg.com/736x/b0/a5/15/b0a51518ab5dff974249c12092f61f7d.jpg",
"https://i.pinimg.com/1200x/2c/ee/80/2cee805a99b20bc45d19e9682e993676.jpg"
];


let s = "";
for(let i=1;i<=55;i++){
    let r = Math.floor(Math.random()*a.length)
    s += `<div class="card"><img src="${a[r]}"></div>`;
}
x.innerHTML=s;