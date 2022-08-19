const body =document.querySelector("body");
const button =document.querySelector("button");
const colors=["black","yellow","#B5523C","#C472C7","#4EE9CF",
"#4EC3E9","#EE9BB1","#9BEEC2"];


button.addEventListener("click",changeBackground);

function changeBackground(){
    const randomNumber=Math.floor(Math.random()*colors.length);
   const color=colors[randomNumber]
    body.style.backgroundColor=color; 
}
