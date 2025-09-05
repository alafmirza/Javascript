//targeted elements

let choises = document.getElementsByClassName("choise");
let winstatus = document.getElementById("status"); 
let userscore = document.getElementById("user"); 
let compscore = document.getElementById("comp"); 

let uscore = 0;
let cscore=0;
   //user play their move
for (const choise of choises) {
    choise.addEventListener("click",()=>{
    userPlay= choise.getAttribute("id");
    playGame(userPlay);
    })
   
}

//computer play their choise
compplay = ()=>{
   const array = ["stone","paper","sissors"];
   let r = Math.floor(Math.random()*3);
     return array[r];
 };

 //draw match
 drawmatch = ()=>{
   winstatus.innerText="Match Draw!";
   winstatus.style.backgroundColor="darkyellow";
 }

 //plsy game
 playGame = (userplay)=>{
    userwin = true;
    computerplay = compplay();
    if(userplay===computerplay){
      drawmatch();
    }
    else if(userplay==="stone"){
      userwin = (computerplay==="paper") ? false : true;
    }else if(userplay==="paper"){
       userwin = (computerplay==="sissors") ? true : false;
    }else{//sissors
         userwin = (computerplay==="stone") ? false :true;
    }
     winner(userwin);

  };

    //winner 
     winner = (userwin)=>{

        if(userwin){ //userwinner
          uscore++
          winstatus.innerHTML="<h3>You Win</h3>";
          winstatus.style.backgroundColor="green";
          userscore.innerText=uscore;
        }else{//comp winner
          cscore++
         winstatus.innerHTML="<h3>You Lose</h3>";
          winstatus.style.backgroundColor="red";
          compscore.innerText=cscore;
        }
    }
       

 

