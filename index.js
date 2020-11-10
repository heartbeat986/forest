
let  endX = 0;
let endY = 0

function loaded(){
   let y = document.getElementById("getbtn").offsetTop;
   let x = document.getElementById("getbtn").offsetLeft;
   let width = document.getElementById("getbtn").clientWidth;
   let height = document.getElementById("getbtn").clientHeight;
   endX = x - 0.5 *width;
   endY = y + 0.5 *height;
   console.log(x,y,width,height,endX);
   console.log(endY);
   let a =  document.getElementById("ball");
    a.addEventListener("animationend",function() {
        a.classList.remove("show");
        a.classList.add("move");
    });
}

function getEnergy(e){
    console.log(e);
}

function catchEnergy(e){
    let a =  document.getElementById("ball");
    setTimeout(()=>{
        let div = document.createElement('div');
        div.id = "ball";
        div.addEventListener("animationend",function() {
            div.classList.remove("show");
            div.classList.add("move");
        });
        div.onclick=catchEnergy;
        let divbox = document.createElement('div');
        let span = document.createElement('span');
        divbox.classList.add("cycle-box");
        div.classList.add("cycle","show");
        span.classList.add("cycle-text");
        span.innerText = "行走"
        div.appendChild(divbox);
        div.appendChild(span);
        a.parentNode.replaceChild(div,a);
    },1000);
    a.classList.add("collect");
}