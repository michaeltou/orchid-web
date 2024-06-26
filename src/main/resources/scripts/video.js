const displayBtn = document.querySelector("#displayBtn");
const hideBtn = document.querySelector("#hideBtn");

const video = document.querySelector("video");

//btn.addEventListener("click",()=>{box.classList.remove("hidden");})
displayBtn.addEventListener("click",()=> {document.getElementById("tv").style.display="block";});
hideBtn.addEventListener("click",()=> {document.getElementById("tv").style.display="none";});

video.addEventListener("click",()=> video.play());

