
let btn = document.querySelector("button");
let body = document.querySelector('.container');
// console.log(btn);
let img = document.querySelector("img");
let title = document.querySelector('h1');

// console.log(text);


function onOff(){
    if ( btn.innerText =="Allumer"){
        title.innerText= " Bonne nuit les enfants!";
        img.src = "img/on.png"
        btn.innerText = "Eteindre";
        body.style.background = "gray";
      } else if (  btn.innerText=="Eteindre"){
        title.innerText= " Bonne journée les enfants!";
        img.src = "img/off.png"
        btn.innerText = "Allumer";
        body.style.background = "rgb(225, 211, 48)";
      }



}

btn.addEventListener("click", onOff);
// function off(){
// img.src = "img/off.png"
// btn.innerText = "Allumer";
// body.style.background = "rgb(225, 211, 48)";


// }
//  
