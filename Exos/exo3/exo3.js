

let j1 = "lundi";
let j2 = "mardi";
let j3 = "mercredi";
let j4 = "jeudi";
let j5 = "vendredi";
let j6 = "samedi";
let j7 = "dimanche"

  
let result = window.prompt ("Veuillez indiquer un jour de la semaine :")


if (result === j1){
    console.log(j2);
    document.write(`<h3> le jour suivant est : ${j2} </h3>`)
    
}


else if (result === j2){
    console.log(j3)
    document.write(`<h3> le jour suivant est : ${j3} </h3>`);
    
}
else if (result === j3){
    console.log(j4);
    document.write(`<h3> le jour suivant est : ${j4} </h3>`);
    
}
else if (result === j4){
    console.log(j5);
    document.write(`<h3> le jour suivant est : ${j5} </h3>`);
    
}
else if (result === j5){
    console.log(j6);
    document.write(`<h3> le jour suivant est : ${j6} </h3>`);
    
}
else if (result === j6){
    console.log(j7);
    document.write(`<h3> le jour suivant est : ${j7} </h3>`);
    
}
else if (result === j7){
    console.log(j1);
    document.write(`<h3> le jour suivant est : ${j1} </h3>`);
    
}

else {
    
    document.write(`<h1> Veuillez recharger la page et écrire plus lisiblement et sans fautes </h>`)
    alert("Veuillez recharger la page et écrire plus lisiblement et sans fautes")
    // location.reload();
}

