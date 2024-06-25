

var mybtn = document.querySelector("button");
var myHead = document.querySelector("h1");

function setUserName(){
    var userName = prompt("Please enter your name.");
    localStorage.setItem("userName",userName);
    myHead.textContent = `hello world, ${userName}`
}

if(!localStorage.getItem("userName")){
    setUserName();
}

mybtn.onclick = setUserName;